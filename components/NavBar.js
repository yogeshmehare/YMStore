import React, { useRef,useEffect,useContext,useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import SearchBox from './SearchBox';
import { CartShowOrHideContext } from '../contexts/CartShowOrHideContext';
import { useRouter } from 'next/router'
import { LoginContext } from '../contexts/LoginContext';
import Avatar from '@mui/material/Avatar';
import ProfileAndAccountSettings from './ProfileAndAccountSettings'

const NavBar = () => {

  const router = useRouter();
  const loginContext = useContext(LoginContext);

  const [loginStatus, setLoginStatus] = useState(false)
  const [userFullName, setUserFullName] = useState("")

  //let ImageUrl = "/profile/profileIcon.jpg";
  let ImageUrl = "";

  useEffect(() => {}, [router.pathname]);

  useEffect(() => {
    setLoginStatus(loginContext.state.User.UserLogInStatus);
    setUserFullName(loginContext.state.User.UserFirstName + " " + loginContext.state.User.UserLastName);
  }, [loginContext.state.User.UserFirstName, loginContext.state.User.UserLastName, loginContext.state.User.UserLogInStatus]);

  const ulElement = useRef();

  function ToggleDisplayOfNavbar(e) {
    let x = document.getElementById('mNavbar');
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function ToggleDisplayOfNavbar1(e) {
    var w = window.innerWidth;
    if (w < 768) {
      let x = document.getElementById('mNavbar');
      if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

  }

  return (
    <CartShowOrHideContext.Consumer>{(context) => {
      const { toggleCartVisibility } = context

      return (
        <nav className="sticky top-0 z-10">
          <ul ref={ulElement} className="md:flex items-center justify-between bg-violet-700">
            <div className="flex">
              <div className='justify-start float-left content-left'>
                <div className={`flex-col inline-block p-1 border border-white 
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
            md:hidden`}
                  onClick={ToggleDisplayOfNavbar}>
                  <div className='line bg-white font-bold my-1 h-0.5 w-6'></div>
                  <div className='line bg-white font-bold my-1 h-0.5 w-6'></div>
                  <div className='line bg-white font-bold my-1 h-0.5 w-6'></div>
                </div>
              </div>
              <div className='justify-center items-center float-left mx-1 mt-1 mb-1'>
                <img className='rounded' src="/ymstoreLogo4.png" width={150} alt="ANY_Seeds.com" />
              </div>
            </div>
            <div id='mNavbar' className='hidden md:flex md:float-left'>
              {/* style={{ display: 'none' }}  */}
              <Link href="/">
                <a>
                  <li className={`li text-white mx-2 my-0 font-bold hover:bg-violet-500 hover:text-blue-800 p-2  ${router.pathname==="/"?"bg-pink-500":""}`}>
                    Home
                  </li>
                </a>
              </Link>
              <Link href="/products">
                <a onClick={ToggleDisplayOfNavbar1} >
                  <li className={`li text-white mx-2 my-0 font-bold hover:bg-violet-500 hover:text-blue-800 p-2 ${router.pathname==="/products"?"bg-pink-500":""}`}>
                    Products
                  </li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li className={`li text-white mx-2 my-0 font-bold hover:bg-violet-500 hover:text-blue-800 p-2 ${router.pathname==="/about"?"bg-pink-500":""}`}>
                    About
                  </li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li className={`li text-white mx-2 my-0 font-bold hover:bg-violet-500 hover:text-blue-800 p-2 ${router.pathname==="/contact"?"bg-pink-500":""}`}>
                    Contact
                  </li>
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-3 mr-5 pl-5">
              <div className='cursor-pointer flex justify-center rounded-3xl  bg-white p-1'>
                <SearchBox />
              </div>
              {!loginStatus && <Link href={'/login'}>
                <a>
                  <div className='loginBtn cursor-pointer flex justify-center space-x-1 text-white border-blue-700 border-2 p-1.5 bg-blue-800 rounded-lg
                  hover:text-blue-300 hover:bg-blue-600 hover:border-blue-900'>
                    <Image src="/account.png" alt='profile_icon' title="profile icon" height="30" width="30" />
                    <p className='font-bold'>Log in</p>
                  </div>
                </a>
              </Link>}

              {loginStatus && ImageUrl!="" && <div><Avatar alt="ProfileIcon" src={ImageUrl} /></div> }
              
              {loginStatus && ImageUrl=="" && <ProfileAndAccountSettings fullName={userFullName}/>}



              <div className='cartBtn cursor-pointer flex justify-center rounded-3xl border-2 border-blue-700 bg-white h-10 w-11 pr-1
                  hover:border hover:border-red-500 hover:bg-gray-300' onClick={toggleCartVisibility}>
                <Image src="/cart.png" alt='cart_icon' title="cart icon" height="25" width="25" />
              </div>


            </div>
          </ul>
        </nav>
      )

    }}

    </CartShowOrHideContext.Consumer>
  )


}

export default NavBar
