import React, { useEffect, useState } from 'react';
import { cartstate } from './Context';
import { MdDelete } from "react-icons/md";

const CartItemList = () => {
  const { state, dispatch } = cartstate();
  const[money,setmoney]=useState(0)
  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };
  useEffect(()=>{
    setmoney(0)
    let total=0
    state.cart.forEach((m)=>{total+=parseInt(m.price)*m.qty});
    console.log(total)
    setmoney(total)
    },[state.cart])

  return (
    <div className='flex justify-between'>
    <div className='p-6 w-full'>
      {state.cart.map((item) => (
        <div key={item.id} className=' flex justify-between bg-gray-200 p-4 rounded-lg shadow-md w-full  m-5'>
         <div> <img className='w-full h-48 object-cover rounded-md' src={item.avatar} alt={item.name} /></div>
          <div className='mt-20 text-center flex'> 
            <h1 className='text-lg font-bold'>{item.name}</h1>
          </div>
            <h2 className=' mt-20 gap-10 text-gray-700 mt-1'>{item.price}</h2>
            <button
              className='mt-2 text-red-500 hover:text-red-700'
              onClick={() => handleRemove(item)}
            >
              <MdDelete size={40} />
            </button>
          <div>
            <form action="" className='flex mt-20 gap-2'>
              <label htmlFor="quantity" className='font-bold'>qty</label>
          <input type="number" id='quantity' name="quatity" min="1" max="5" className='rounded text-xl' onChange={(e)=>dispatch({type:"Change in qty",
            payload:{
              id:item.id,
              qty:e.target.value,
            }
          })}/>
            </form>
          </div>
            
          
        </div>
      ))}
    </div>
    <div id="filter" className=" m-5 w-64 bg-gray-900 text-white p-4 mt-10 
    max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded text-center">
      <h1 className="text-lg font-bold mb-4">Sub total ({state.cart.length}) items</h1>
      <h1 className="text-lg font-bold mb-4">Total:${money}</h1>

    </div>
    </div>
  );
};

export default CartItemList;
