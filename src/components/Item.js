import React from "react";

export default function Item(props) {
  const buyItem = () => {
    props.setItems(
      props.items.filter((item) => {
        if (item.id === props.id) item.bought = !item.bought;
        return item;
      })
    );
  };

  const deleteItem = () => {
    props.setItems(
      props.items.filter((item) => {
        if (item.id !== props.id) return item;
      })
    );
  };

  return (
    <div
      id="item"
      className={`flex items-center justify-between w-2/3 mt-6 bg-yellow-500 py-1 px-4 rounded-md text-white font-semibold text-2xl mx-auto shadow-md mb-8 ${
        props.bought === true ? "bought" : ""
      }`}
    >
      <h3 id="item-description">{props.description}</h3>
      <div id="right" className="flex">
        <h3 id="item-price">{props.price}$</h3>
        <div id="menu">
          <i
            onClick={deleteItem}
            className="fa fa-trash ml-6 mr-2 text-red-500 hover:text-red-700 cursor-pointer transition-all"
          ></i>
          <i
            onClick={buyItem}
            className="fa fa-check text-green-400 hover:text-green-500 cursor-pointer transition-all"
          ></i>
        </div>
      </div>
    </div>
  );
}
