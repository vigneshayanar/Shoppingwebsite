import React from 'react'
import Rating from './Rating'
import Ratingproduct from './Ratingproduct'
import { cartstate } from './Context';
const Sigleproduct = ({m}) => {
    const{state:{cart},dispatch}=cartstate();
  return (
    <div className='products bg-gray-200 p-4 rounded-lg shadow-md m-6'>
        <div className='flex flex-col '>
            <div className=''>
                <img className='' src={m.avatar} alt="" width={250} height={300}/>
            </div>
            <div className='flex-col'>
              {console.log("hii")}
            <h1 className='text-lg font-bold'>{m.name}</h1>
            <h2 className='text-md text-gray-700'>{m.price}</h2>
            {m.fastDelivery ?(
            <div>Fast delivery</div>
            ):(
             <div>4 days delivery</div>
            )}
            <Ratingproduct rating={m.rating}/>
            </div>
            {console.log(cart)}
            <div className='flex gap-2 justify-between mt-2'>
            {cart.some(a=>a.id===m.id)? <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:m})} className='px-2 py-1 bg-red-500 hover:bg-red-900 rounded mt-1'>Remove from cart</button>:
            <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:m})} className={`px-2 py-1 rounded mt-1 ${m.instock ? 'bg-blue-500 hover:bg-blue-900' : 'bg-gray-500 cursor-not-allowed'}`}
            disabled={!m.instock}>{!m.instock?"Out of stock":"Add to stock"}</button>}
            </div>
        </div>
    </div>
  )
}

export default Sigleproduct