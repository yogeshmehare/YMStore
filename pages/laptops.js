/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mongoose from 'mongoose'
import Laptop from './../Models/Laptop'


const Laptops = ({ laptops }) => {

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

            {laptops.map(laptop => {
              const slug = laptop.Title.replace("/ /g", "-") + '-' + laptop._id;
              const url = '/product/' + slug;
              return <div key={laptop._id} className="lg:w-1/5 md:w-1/2 p-4 m-2 shadow-xl hover:boxShadow">
                <div className='product float-right'>
                  <button id={laptop._id} data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" value={laptop.FavProduct} onClick={() => { UpdateFavProduct(laptop._id) }} className={`rounded-full w-8 h-8 p-0 hover: border-0 inline-flex items-center justify-center bg-gray-200 ${laptop.FavProduct ? 'text-red-500' : 'text-gray-500'}`}>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                    <div id="tooltip-click" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                      Tooltip content
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </button>
                  <button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip click</button>
                  <div id="tooltip-click" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>


                </div>
                <Link href={{
                  pathname: url,
                  query: {
                    Category: "Laptop"
                  }
                }}
                  as={url}>
                  <a>
                    <img alt="ecommerce" className="m-auto p-2" src={laptop.Image} height={200} width={300} />
                    <div className="mt-4 text-center font-bold">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{laptop.Category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{laptop.Title}</h2>
                      <p className="mt-1">₹{laptop.Price}</p>
                    </div>
                  </a>
                </Link>
              </div>
            })

            }
          </div>
        </div>
        <button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" className="mb-2 ml-20 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip left</button>
        <div id="tooltip-left" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip on left
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

      </section >
    </div >
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let laptops = await Laptop.find()
  return {
    props: { laptops: JSON.parse(JSON.stringify(laptops)) },
  }
}

export default Laptops
