import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Input(props) {
  const getItemDescription = (e) => {
    props.setItemDescription(e.target.value);
  };

  const getItemPrice = (e) => {
    props.setItemPrice(e.target.value);
  };

  const [showPriceInput, setShowPriceInput] = useState(false);

  const addNewItem = () => {
    if (props.itemDescription) setShowPriceInput(true);
    if (props.itemDescription && props.itemPrice) {
      props.setItems([
        ...props.items,
        {
          id: uuidv4(),
          description: props.itemDescription,
          price: props.itemPrice,
          bought: false,
        },
      ]);
      setShowPriceInput(false);
      props.setItemDescription("");
      props.setItemPrice("");
    }
  };

  const changeFilter = (e) => {
    props.setFilter(e.target.value);
  };

  return (
    <div className="relative w-full flex items-center justify-center ">
      <div className="relative w-2/4">
        {!showPriceInput ? (
          <input
            value={props.itemDescription}
            type="text"
            placeholder="Type an item"
            className="w-full py-1 px-3 text-2xl rounded-md bg-opacity-80 bg-white border-2 border-yellow-400 placeholder-gray-500 font-mono outline-none"
            onChange={getItemDescription}
          />
        ) : (
          <input
            value={props.itemPrice}
            type="number"
            placeholder="Type the price"
            className="w-full py-1 px-3 text-2xl rounded-md bg-opacity-80 bg-white border-2 border-yellow-400 placeholder-gray-500 font-mono outline-none"
            onChange={getItemPrice}
          />
        )}
        <i
          onClick={addNewItem}
          className="fa fa-check cursor-pointer bg-green-400 text-black p-1 rounded-md absolute top-3 right-2"
        ></i>
      </div>
      <select
        onChange={changeFilter}
        className="ml-5 h-11 rounded-sm shadow-lg outline-none font-semibold px-1 text-md bg-white bg-opacity-80 border-yellow-400 border-2"
      >
        <option className="font-semibold" value="All">
          All
        </option>
        <option className="font-semibold" value="Bought">
          Bought
        </option>
      </select>
    </div>
  );
}
