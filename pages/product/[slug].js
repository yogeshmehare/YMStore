import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { CartShowOrHideContext } from '../../contexts/CartShowOrHideContext'
import Laptop from '../../Models/Laptop'
import Mobile from '../../Models/Mobile'

const Slug = ({ mProds, mProduct, ColorsSet, SizesSet }) => {
  const router = useRouter()
  const { slug } = router.query

  console.log("hiii2", slug);

  const [pin, setPin] = useState("")
  const [serviceable, setServiceable] = useState()
  const spinRef = useRef('spinRef')

  const [product, setProduct] = useState(mProduct);

  const [mSizesSet, setSizesSet] = useState(SizesSet);
  const [mColorsSet, setColorsSet] = useState(ColorsSet);

  const UpdateFavProductInDB = async () => {
    const response = await fetch('/api/updateLaptop', {
      method: 'POST',
      body: JSON.stringify({ id: product._id, FavProduct: product.FavProduct }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.json());
  }

  const UpdateFavProduct = (e) => {
    setProduct(prevState => ({
      ...prevState,
      ["FavProduct"]: !product.FavProduct
    }));
  };

  useEffect(() => {
    UpdateFavProductInDB();
  })

  const UpdateVariantOfProduct = (colorVariant) => {
    setProduct(prevState => ({
      ...prevState,
      ["ColorVariant"]: colorVariant
    }));
  };

  const UpdateSizeOfProduct = e => {
    const { value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      ["Size"]: value
    }));
    setColorsSet(GetColorsAccordingToSizes(value));
  };

  const GetSizeAccordingToColor = (variant) => {
    let ss = new Set();

    switch (product.Category) {
      case 'Laptop':
        mProds.forEach((prod) => {
          if (prod.ColorVariant == variant) {
            ss.add(prod.Size)
          }
        })
        break;
      case 'Mobile':

        break;
      default:
        break;
    }

    return ss;
  }

  const GetColorsAccordingToSizes = (size) => {
    let cs = new Set();

    switch (product.Category) {
      case 'Laptop':
        mProds.forEach((prod) => {
          if (prod.Size == size) {
            cs.add(prod.ColorVariant)
          }
        })
        break;
      case 'Mobile':

        break;
      default:
        break;
    }

    return cs;
  }

  function SetVariant(e) {
    let Variant = e.target.id
    let buttons = document.getElementById("buttonDiv").children;
    for (let index = 0; index < buttons.length; index++) {
      const element = buttons[index];

      if (element.id == Variant) {
        let v = Variant.slice(8)
        UpdateVariantOfProduct(v);
        document.getElementById(element.id).classList.add('border-4');
        document.getElementById(element.id).classList.remove('border-2');
        setSizesSet(GetSizeAccordingToColor(v));
      } else {
        document.getElementById(element.id).classList.add('border-2');
        document.getElementById(element.id).classList.remove('border-4');
      }
    }
  }

  const CheckService = async () => {
    spinRef.current.classList.remove('hidden')
    const pinsJson = await fetch('http://localhost:3000/api/pinServiceability')
    const pins = await pinsJson.json()
    if (pins.includes(parseInt(pin))) {
      setServiceable(true)
      setTimeout(() => {
        spinRef.current.classList.add('hidden')
      }, 200);
    } else {
      setServiceable(false)
      setTimeout(() => {
        spinRef.current.classList.add('hidden')
      }, 200);
    }
  }

  const onChangeSetPin = (e) => {
    setPin(e.target.value)
  }

  return <CartShowOrHideContext.Consumer>{(context) => {
    const { cart, toggleCartVisibility, SetUpdatedCart, SetSubTotal } = context

    const addToCart = () => {
      if (product.Title in cart) {
        cart[product.Title].Quantity = cart[product.Title].Quantity + 1;
        SetUpdatedCart(cart);
      } else {
        cart[product.Title] = product;
        SetUpdatedCart(cart);
      }
      SetSubTotal();
    }

    return (
      <section className="text-gray-600 body-font overflow-hidden text-center md:text-left">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className='mx-auto my-10'>
              <img alt="e-commerce" className="object-contain w-80 h-auto p-5 hover:w-96
                                             transition-shadow ease-in-out duration-30 hover:shadow-xl" src={product.Image} />

            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-0 lg:mt-0 text-center">
              <h2 className="text-lg title-font text-gray-500 tracking-widest">{product.BrandName}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2 mt-1">{product.Title}</h1>
              <div className="flex mb-4 justify-center">
                <span className="flex items-center ">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3 font-semibold">{product.ReviewCount} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.Desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-center">
                <div className="flex items-center">
                  <span className="mr-3 font-semibold">Color</span>

                  <div id='buttonDiv' className='container flex-wrap'>
                    {
                      Array.from(mColorsSet).map((color, index) => {
                        // let bgc = "";
                        // if(["white","black"].includes(color)){
                        //   bgc = "bg-"+color
                        // }
                        // else{
                        //   bgc="bg-"+color+"-500"
                        // }
                        return <button key={color} id={"colorBtn" + color} onClick={SetVariant} className={"border-2 border-fuchsia-500 ml-1 rounded-full w-6 h-6 focus:outline-none "} style={{ backgroundColor: color }} />
                      })
                    }
                  </div>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 font-semibold">Size</span>
                  <div className="relative">
                    <select id='sizeOfProduct' onChange={UpdateSizeOfProduct} defaultValue={'SM'} className="font-semibold rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {
                        Array.from(mSizesSet).map((size, index) => {
                          return <option key={size} value={size}>{size}</option>
                        })
                      }
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="title-font font-semibold mx-3 text-2xl text-gray-900">₹{product.Price}</span>
                <div className='flex'>
                  <button onClick={() => { addToCart(); toggleCartVisibility() }} className="flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
                  <button className="flex mx-6 text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
                </div>
                <button onClick={UpdateFavProduct} className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4 bg-gray-200 ${product.FavProduct ? 'text-red-500' : 'text-gray-500'}`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex my-7 items-center space-x-2 justify-center">
                <input type="number" name="pin" pattern="[0-9]{4}" maxLength="4" placeholder='Enter Pin' onChange={onChangeSetPin} value={pin} className='border border-black rounded text-sm font-bold text-center p-1' />
                <button onClick={CheckService} className='mx-3 flex-row items-center justify-center text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 py-1 px-2 rounded'>
                  <p className='float-left'>Check Pin</p>
                  <svg ref={spinRef} role="status" className="hidden float-right w-4 h-4 ml-1 mt-1 text-pink-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                </button>

              </div>
              <div className='p-3'>
                {(serviceable && serviceable != null) && <p className='text-green-600 text-sm my-2 font-semibold'>Yay!, Pincode is Serviceable. You can order this product.</p>}
                {(!serviceable && serviceable != null) && <p className='text-red-600 text-sm my-2 font-semibold'>Sorry for the inconvenience, Pincode is not Serviceable yet. But we are improving our services.</p>}
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }}
  </CartShowOrHideContext.Consumer>
}

export async function getServerSideProps(context) {
  let slug = context.query.slug;

  let prod;
  let prods;
  let colorsSet = new Set();
  let sizesSet = new Set();


  switch (context.query.Category) {
    case "Laptop":
      prod = await Laptop.findOne({ Slug: slug })
      prods = await Laptop.find({ Title: prod.Title })
      break;
    case "Mobile":
      prod = await Mobile.findOne({ Slug: slug })
      prods = await Mobile.find({ Title: prod.Title })
      break;

    default:
      prod = await Mobile.findOne({ Slug: slug })
      if(prod){
        prods = await Mobile.find({ Title: prod.Title })
        break;
      }
      prod = await Laptop.findOne({ Slug: slug })
      if(prod){
        prods = await Laptop.find({ Title: prod.Title })
        break;
      }


      break;
  }

  prods.forEach(pdt => {
    colorsSet.add(pdt.ColorVariant)
    sizesSet.add(pdt.Size)
  });

  // prods = await Mobile.find({ Title: prod.Title })
  // prods.forEach(pdt => {
  //   colorsSet.add(pdt.ColorVariant)
  //   sizesSet.add(pdt.Size)
  // });

  colorsSet = [...colorsSet];
  sizesSet = [...sizesSet];
  return {
    props: {
      mProds: JSON.parse(JSON.stringify(prods)),
      mProduct: JSON.parse(JSON.stringify(prod)),
      ColorsSet: colorsSet,
      SizesSet: sizesSet
    }
  }
}

export default Slug