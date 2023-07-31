import {useItemsStore} from  './store.js';

export default function DisplayItem() {
  const item = useItemsStore((state) => state.selected_item);
  console.log(item)
  let stars = [];
  for (let rating = 0; rating < Math.ceil(item.rating); rating++) {
    stars.push(<img className=" w-6 h-6" src="images/star.png" />);
  }
  return (
      <div className=" w-full h-screen md:flex justify-center items-center md:bg-purple-200 overflow-x-hidden ">
        <div className=" md:w-[40%] ">
          <div className="  bg-white rounded-3xl ">
            <div className="relative overflow-hidden">
              <div className=" m-4 ">
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
                  <div className=" flex gap-5 font-semibold [&_p]:px-4 [&_p]:py-2 my-3">
                    <p className=" bg-yellow-200 rounded-full ">Small</p>
                    <p>Medium</p>
                    <p>large</p>
                  </div>
                </div>
                <div>
                  <p className=" text-gray-600 mt-6">Topping</p>
                  <div className="  font-semibold flex gap-5 [&_p]:px-4 [&_p]:py-2 my-3">
                    <p className=" bg-yellow-200 rounded-full ">Cheese</p>
                    <p>Onion</p>
                    <p>Mushroom</p>
                  </div>
                </div>
                <div className=" ">
                  <p className=" text-gray-600 mt-6">Description</p>
                  <p className=" w-[20pc] my-3 ">{item.description}</p>
                </div>
                <div className=' bg-slate-100 flex justify-center rounded-xl'>
                  <div className=' font-bold p-3 flex text-xl gap-5'>
                    <div className=' p-3'>-</div>
                    <div className=' p-3'>1</div>
                    <div className=' p-3'>+</div>
                    <div>
                    <div className=' rounded-full bg-black text-yellow-300 p-3 px-5'>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className=" w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] absolute left-[50%] top-10 rounded-full"
                  src={"images/pizza/" + item.image_path}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
