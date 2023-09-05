import { useState } from 'react';
import {useItemsStore} from  './store.js';
import { Link, useParams } from 'react-router-dom';

export default function DisplayItem() {
  const item_id = useParams('id')
  const items = useItemsStore((state) => state.items);
  let item = items.find((item)=>{
   return item.id===item_id['id'] 
  })

  let stars = [];
  for (let rating = 0; rating < 5; rating++) {
    rating < Math.ceil(item.rating)?
    stars.push(<img key={rating} className=" w-6 h-6" src="/images/star.png" />)
    :
    stars.push(<img key={rating} className=" w-6 h-6" src="/images/star-empty.png" />)
  }

  const [size,setSize] = useState('Small')
  let size_styles = " bg-yellow-200 rounded-full";
  let size_options = ["Small", "Medium", "Large"].map((item) => {
    return item === size ? (
      <p onClick={() => setSize(item)} className={size_styles}>
        {item}
      </p>
    ) : (
      <p className='hover:bg-purple-200 rounded-full' 
      onClick={() => setSize(item)}>
        {item}</p>
    );
  });

  const [topping, setTopping] = useState(['Cheese'])
  let topping_styles = " bg-yellow-200 rounded-full flex gap-1";
  let topping_options = ["Cheese", "Onion", "Mushroom"].map((item) => {
    return topping.includes(item) ? (
      <p onClick={() => setTopping(topping.filter(i => i!==item))}
       className={topping_styles}>
       <img src={'/images/'+item+'.png'} className=' w-6' />
        {item}
      </p>
    ) : (
      <p className='hover:bg-purple-200 rounded-full flex gap-1'
       onClick={() => setTopping([...topping,item])}>
       <img src={'/images/'+item+'.png'} className=' w-6' />{item}</p>
    );
  });

  const [counter,setCounter] = useState(1)
  const addCount = () =>{
    counter<10&&setCounter(counter+1)
  }
  const deleteCount = () =>{
    counter>0&&setCounter(counter-1)
  }
  return (
    <div className=" w-full h-screen md:flex justify-center 
    items-center md:bg-purple-200 overflow-x-hidden ">
      <div className=" md:w-[40%] ">
        <div className="bg-white rounded-3xl ">
          <div className="p-4" to="/">
            <div className=" flex justify-between">
              <div>
                <Link to="/">
                  <img className="w-8" src="/images/back.png" />
                </Link>
              </div>
              <div>
                <img className="w-8" src="/images/heart-selected.png" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className=" mx-4 mb-4 ">
              <h2 className=" text-3xl">{item.name}</h2>
              <h3 className=" text-gray-500">with {item.with_type}</h3>
              <span className="flex">
                {stars}
                <span className=" font-semibold">({item.rating})</span>
              </span>
              <span></span>
              <div className=" flex items-center gap-2 mt-6">
                <p className=" text-yellow-400 text-2xl text-bold">$</p>
                <p className=" text-3xl">{item.amount.toFixed(2)}</p>
              </div>
              <div className=" mt-6">
                <p>Calories</p>
                <p className=" font-semibold">{item.calories} Cal</p>
              </div>
              <div className=" mt-6">
                <p>Diameter / Portion</p>
                <p className=" font-semibold">{item.diameter}</p>
              </div>
              <div>
                <p className=" text-gray-600 mt-6">Size</p>
                <div className=" flex  [&_p]:cursor-pointer gap-5 font-semibold [&_p]:px-4 [&_p]:py-2 my-3">
                  {size_options}
                </div>
              </div>
              <div>
                <p className=" text-gray-600 mt-6">Topping</p>
                <div className="  font-semibold flex gap-3 [&_p]:px-3 [&_p]:py-2 my-3">
                  {topping_options}
                </div>
              </div>
              <div className=" ">
                <p className=" text-gray-600 mt-6">Description</p>
                <p className=" w-[20pc] my-3 ">{item.description}</p>
              </div>
              <div className=" bg-slate-100 flex justify-center rounded-xl">
                <div className=" font-bold p-3 flex text-xl gap-5 select-none">
                  <div className=" p-3 cursor-pointer" onClick={deleteCount}>
                    -
                  </div>
                  <div className=" p-3 cursor-default">{counter}</div>
                  <div className=" p-3 cursor-pointer" onClick={addCount}>
                    +
                  </div>
                  <div>
                    <div className=" cursor-pointer rounded-full bg-black text-yellow-300 p-3 px-5">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className=" w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] absolute left-[50%] top-10 rounded-full"
                src={"/images/pizza/" + item.image_path}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
