import React from 'react';
import { GoStar, GoStarFill } from "react-icons/go";

const Rating = ({ star, onClick }) => {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <span key={i} className="cursor-pointer" onClick={() => onClick(i + 1)}>
          {i < star ? <GoStarFill size="15px" /> : <GoStar size="15px" />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
