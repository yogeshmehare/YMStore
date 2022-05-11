import React from 'react'
import { FcSearch } from 'react-icons/fc';


const SearchBox = () => {
  return (
      <form className='cursor-pointer flex items-center'>
          <input className="form-control text-center font-semibold rounded-tl-3xl rounded-bl-3xl p-1 bg-blue-400 outline-0 placeholder:text-slate-700 caret-pink-5" type="search" placeholder="Search" aria-label="Search" />
          <div className="rounded-tr-3xl rounded-br-3xl p-1 bg-blue-400">
            <FcSearch className="h-6 w-6  mr-0.5 active:p-1" />
          </div>
      </form>
  )
}

export default SearchBox
