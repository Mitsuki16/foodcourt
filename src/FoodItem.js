import { Link } from "react-router-dom";
import {useItemsStore} from  './store.js';


export function FoodItem(props) {
  const set_selected_item = useItemsStore((state) => state.set_selected_item);
  const selectItem = (item) =>{
    set_selected_item(item)
  }
  return (
    <Link to="items" onClick={(item) => selectItem(props.item)} className=" flex bg-white rounded-2xl w-[11pc] p-3 ">
      <div className=" mx-auto">
        <img
          className="  w-32 h-32 rounded-full"
          src={"images/pizza/" + props.item.image_path}
        />
        <div className=" ml-0 mt-2 ">
          <h2>{props.item.name}</h2>
          <h3>With {props.item.with_type}</h3>
          <div className=" mt-2 flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <p className=" text-yellow-400 text-lg text-bold">$</p>
              <p> {props.item.amount}</p>
            </div>
            <div>
              <img className=" w-5 h-5 rounded-full" src="netflix_logo.jpg" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
