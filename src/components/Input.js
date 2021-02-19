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

  const addNewItem = (e) => {
    if (e.charCode === 13) {
      if (props.itemDescription) setShowPriceInput(true);
      if (props.itemDescription && props.itemPrice) {
        props.setItems([
          ...props.items,
          {
            id: uuidv4(),
            description: props.itemDescription,
            price: props.itemPrice,
          },
        ]);
        setShowPriceInput(false);
        props.setItemDescription("");
        props.setItemPrice("");
      }
    }
  };

  return (
    <div className="relative w-2/4 mx-auto flex ">
      {!showPriceInput ? (
        <input
          value={props.itemDescription}
          type="text"
          placeholder="Type an item"
          className="w-full mb-12 py-1 px-3 text-2xl rounded-md bg-opacity-80 bg-white border-2 border-yellow-400 placeholder-gray-500 font-mono outline-none"
          onChange={getItemDescription}
          onKeyPress={addNewItem}
        />
      ) : (
        <input
          value={props.itemPrice}
          type="number"
          placeholder="Type the price"
          className="w-full mb-12 py-1 px-3 text-2xl rounded-md bg-opacity-80 bg-white border-2 border-yellow-400 placeholder-gray-500 font-mono outline-none"
          onChange={getItemPrice}
          onKeyPress={addNewItem}
        />
      )}
      <i
        onClick={addNewItem}
        className="fa fa-check cursor-pointer bg-green-400 text-black p-1 rounded-md absolute top-3 right-2"
      ></i>
    </div>
  );
}
