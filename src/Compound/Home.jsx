import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Filter from './Filter';
import { cartstate } from './Context';
import Sigleproduct from './Sigleproduct';
const Home = () => {
 
  const {state}=cartstate()
  const { filterState, filterDispatch } = cartstate();
  const { byRating, searchQuery, sort,category } =filterState

  
  const transform = () => {
    let sortedProducts = [...state.product];
    console.log(sortedProducts)
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return sort === "lowtohigh" ? a.price - b.price : b.price - a.price;
      });
    }
    if (byRating){
      sortedProducts=sortedProducts.filter((p)=>p.rating>=byRating)
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (category) {
      sortedProducts = sortedProducts.filter(product => product.category === category);
  }


    return sortedProducts;
  };
  return (
    
    <div className='flex '>
      <div className='p-2 w-70'>
        <Filter className="bg-scroll" />
        </div>
      <div className='flex flex-wrap ml-10 '>
          {transform().map((m)=><Sigleproduct m={m}/>)}
      </div>
    </div>

  );
};

export default Home;
