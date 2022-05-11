/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mongoose from 'mongoose'
import Mobile from './../Models/Mobile'

const Mobiles = ({ mobiles }) => {
  const [product, setProduct] = useState();

  async function UpdateFavProduct(id) {
    let btn = document.getElementById(id);
    let favValue = btn.classList.contains('text-red-500');
    await fetch('/api/updateLaptop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id, FavProduct: !favValue })
    })
    if (favValue) {
      btn.classList.remove("text-red-500");
      btn.classList.add("text-gray-500");
    } else {
      btn.classList.remove("text-gray-500");
      btn.classList.add("text-red-500");
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {mobiles.map(mobile => {
              const slug = mobile.Title.replaceAll(" ", "-") + "-" + mobile._id;
              const url = '/product/' + slug;
              return <div key={mobile._id} className="lg:w-1/5 md:w-1/2 p-4 m-2 shadow-xl hover:boxShadow">
                <div className='product float-right'>
                  <button id={mobile._id} value={mobile.FavProduct} onClick={() => { UpdateFavProduct(mobile._id) }} className={`rounded-full w-8 h-8 p-0 border-0 inline-flex items-center justify-center bg-gray-200 ${mobile.FavProduct ? 'text-red-500' : 'text-gray-500'}`}>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <Link
                  href={{
                    pathname: url,
                    query: {
                      Category: "Mobile"
                    }
                  }}
                  as={url}>
                  <a>
                    <img alt="ecommerce" className="p-2 m-auto ml-12 justify-center" src={mobile.Image} height={200} width={120} />
                    <div className="mt-4 text-center font-bold">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{mobile.Category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{mobile.Title}</h2>
                      <p className="mt-1">₹{mobile.Price}</p>
                    </div>
                  </a>
                </Link>
              </div>
            })
            }
          </div>
        </div>
      </section >
    </div >
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let mobiles = await Mobile.find()
  return {
    props: { mobiles: JSON.parse(JSON.stringify(mobiles)) },
  }
}

export default Mobiles
