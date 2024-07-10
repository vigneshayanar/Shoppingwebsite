import React, { useState } from 'react';
import "./main.css";
import Rating from './Rating';
import { cartstate } from './Context';

const Filter = () => {
    const { filterState, filterDispatch } = cartstate();
    const { byRating, searchQuery, sort, category } = filterState;

    const handleRatingClick = (rating) => {
        filterDispatch({
            type: "FILTER_BY_RATING",
            payload: rating
        });
    };

    const handleCategoryChange = (event) => {
        filterDispatch({
            type: "FILTER_BY_CATEGORY",
            payload: event.target.value
        });
    };

    return (
        <div id="filter" className="sticky top-4 bg-gray-900 text-white p-4 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded text-center">
            <h1 className="text-lg font-bold mb-4">Filter Products</h1>
            <form action="" className="flex flex-col space-y-2">
                <div className="flex flex-col items-center space-x-2">
                    <div className='flex p-4 mr-1 items-center space-x-2'>
                        <input id="asc" type="radio" name="sort" checked={sort === "lowtohigh"} onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "lowtohigh" })} />
                        <label htmlFor="asc">Ascending</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input id="desc" type="radio" name="sort" checked={sort === "hightolow"} onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "hightolow" })} />
                        <label htmlFor="desc">Descending</label>
                    </div>
                </div>
                <h1>Category</h1>
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="p-2 rounded border-none bg-gray-800 text-white"
                >
                    <option value="">Select a category</option>
                    <option value="food">Food</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="toys">Toys</option>
                </select>
                <p>Rating:</p>
                <div className="flex flex-row items-center gap-2">
                    <p className="text-center ml-5">
                        <Rating star={byRating} onClick={handleRatingClick} />
                    </p>
                </div>
                <button type="button" className="mt-4 px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}>
                    Clear Filter
                </button>
            </form>
        </div>
    );
};

export default Filter;
