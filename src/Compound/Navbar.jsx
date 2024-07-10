import React from 'react';
import { Link } from 'react-router-dom';
import { cartstate } from './Context';
import { BsCartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const MainNavBar = () => {
  const { state } = cartstate();
  const { filterState, filterDispatch } = cartstate();
    const { byRating, searchQuery, sort } =filterState
  return (
    <div className='flex justify-between items-center h-16 w-full bg-white-900 text-gary-900 p-4 shadow-lg '>
      <Link to={'home/'} className='text-2xl font-bold hover:text-gray-400 flex'>Shop<h1 className='text-3xl text-red-500'>F</h1>rd</Link>
      <div className="relative w-full max-w-md mx-4">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size="20px" />
        <input
          type="text"
          placeholder="search for shopping"
          className="rounded p-2 pl-10 w-full border-none text-black"
          value={searchQuery}
          onChange={(e)=>
            filterDispatch({
              type: "SEARCH_QUERY",
              payload: e.target.value
          })
        }
        />
      </div>     
      <Link to={'/'} className='font-bold text-xxl ml-10 uppercase'>Home</Link> 
      <Link to={'/cart'} className='flex items-center gap-2 text-xl font-semibold hover:text-gray-300'>
        <span className='bg-black-900 rounded-full px-2 py-1'>{state.cart.length}</span>
        <BsCartFill size={40}/>
      </Link>
    </div>
  )
}

export default MainNavBar;
