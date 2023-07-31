import React from "react";
import { FoodItem } from "./FoodItem.js";
import {useItemsStore} from  './store.js';

export default function DisplayItems() {
  const data = useItemsStore((state) => state.items);
  return (
    <div>
      <div className=" w-full md:h-screen bg-purple-200  flex justify-center items-center ">
        <div className=" md:w-[50%]  rounded-3xl  p-3">
          <div className=" flex items-center justify-between m-6">
            <div className=" font-semibold">
              <h1 className=" text-4xl">Fast Food,</h1>
              <h1 className=" text-2xl">Fast Delivery</h1>
            </div>
            <div>
              <img className=" w-8 h-8 rounded-full" src="netflix_logo.jpg" />
            </div>
          </div>
          <div
            className=" bg-white flex justify-between items-center
        mx-2 my-5 rounded-2xl gap-2"
          >
            <div className=" w-full">
              <input
                type="text"
                className=" w-full p-3 outline-none ml-2"
                placeholder="Search Your Pizza Here"
              />
            </div>
            <div className=" m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className=" flex justify-center  ">
            <div className=" [&_div]:w-[7pc] flex gap-2 ">
              <div className="flex gap-1 bg-yellow-200 p-4 rounded-3xl">
                <img
                  className=" w-6 h-6 rounded-full"
                  src="images\pizza\tomato.jpg"
                />
                <h1>Pizza</h1>
              </div>
              <div className="flex gap-1 bg-white p-4 rounded-3xl">
                <img
                  className=" w-6 h-6 rounded-full"
                  src="images\burger\burger.png"
                />
                <h1>Burger</h1>
              </div>
              <div className="flex gap-1 bg-white p-4 rounded-3xl">
                <img
                  className=" w-6 h-6 rounded-full"
                  src="images\snacks\popcorn.png"
                />
                <h1>Snack</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="  flex flex-wrap flex-row items-center justify-center gap-8 my-10 ">
              {data.map((item) => {
                return <FoodItem  key={item.id}  item={item}></FoodItem>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
