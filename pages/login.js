/* eslint-disable @next/next/no-img-element */
import React,{useContext} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../contexts/LoginContext'


const Login = () => {

  let router = useRouter();
  const loginContext = useContext(LoginContext)

  const LoginWithEmail = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const response = await fetch('/api/getUser', {
      method: 'POST',
      body: JSON.stringify({ Email: email, Password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let res = await response.json()
    if (res.success) {
      setTimeout(() => {
        loginContext.SetLogInStatus(res.user);
        router.push("/")
      }, 1500);
      toast.success(res.msg, {
        position: "top-left",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(res.msg, {
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

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="/loginbg.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-slate-400 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl text-center md:text-2xl font-bold leading-tight mt-auto">Log in to your account</h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700 text-sm font-bold">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Enter Email Address" className="peer w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" autoFocus={true} required={true} />
                <p className="mt-2 ml-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter Password" minLength="6" className="w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required={true} />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>
              {/* type="submit" */}
              <button onClick={LoginWithEmail} className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-2 py-2 mt-2">Log In</button>
            </form>

            <div
              className="w-full h-5 border-b mt-3 border-black text-center">
              <span className="font-normal bg-slate-400 pt-0 pb-0 pl-2.5 pr-2.5">
                or
              </span>
            </div>

            <button href="#" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-2 py-2 mt-6">
              <span className='m-auto flex justify-center items-center'><FaFacebook className='mr-2 rounded-xl p-0' />
                Login with facebook</span>
            </button>
            <button href="#" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-2 py-2 mt-6">
              <span className='-ml-3 flex justify-center items-center'><FcGoogle className='mr-2 bg-white rounded-xl p-0.5' />Login with Google</span>
            </button>

            <div className='flex justify-center mt-5'>
              <Link legacyBehavior href="/signup">
                <a className="text-blue-800 hover:text-blue-700 font-semibold">Create an
                  account</a>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </>
  )
}

export default Login

