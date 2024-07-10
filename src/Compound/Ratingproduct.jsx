import React from 'react'
import { GoStar, GoStarFill } from "react-icons/go";

const Ratingproduct = ({rating}) => {
  return (
    <div className='flex gap-1'>
       { [...Array(5)].map((_,i)=>(
        <span>{i<rating?<GoStarFill size="15px"/>:<GoStar size="15px"/>}</span>
       ))}
    </div>
  )
}

export default Ratingproduct