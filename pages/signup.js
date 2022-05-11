/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {

  let router = useRouter();

  const StoreUserInDB = async(user) => {
    const response = await fetch('/api/addUser',{
      method:'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const res = await response.json();
    console.log(res);
    if(res.success){
      setTimeout(() => {
        router.push("/login")
      }, 1500);
      toast.success("You are registered successfully, Please Login.", {
        position: "top-left",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      toast.error("Failed to register, Please try again later.", {
        position: "top-left",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const registerUser = ()=>{
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user = {
      FirstName: firstName,
      LastName: lastName,
      Email:email,
      Password:password
    }
    console.log(user);
    StoreUserInDB(user);
  }


  return (
    <div className="flex justify-end">
      {/* <div className="w-full xl:w-3/4 lg:w-11/12 flex "> */}
      <div className="bg-indigo-600 hidden lg:block lg:w-10/12">
        <img src="/loginbg.webp" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full lg:w-6/12 bg-slate-400 p-3">
        <h3 className="pt-4 text-2xl text-center font-bold mt-12">Create an Account!</h3>
        <form className="px-8 pt-6 pb-8 mb-4 bg-slate-400 rounded">
          <div className="mb-4 md:flex md:justify-center">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                // className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className='flex md:justify-center'>
            <div className="mb-4 md:w-[430px]">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input className="px-3 py-2 w-full rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-4 md:flex md:justify-center">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                // className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500 mt-1 ml-1">Please choose a password.</p>
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Confirm Password
              </label>
              <input
                // className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                className="w-full px-3 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                id="c_password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
              onClick={registerUser}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register Account
            </button>
          </div>
          <hr className="mb-6 border-t" />

          <div className="text-center">
            <Link href="/login">
              <a className="inline-block text-blue-800 hover:text-blue-700 font-semibold">
                Already have an account? Login!
              </a>
            </Link>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Signup
