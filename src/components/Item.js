import React from "react";

export default function Item(props) {
  const handleItemAction = (e) => {
    props.setItems(
      props.items.filter((item) => {
        return item.id !== props.id;
      })
    );
  };

  return (
    <div
      id="item"
      className="flex items-center justify-between w-2/3 bg-yellow-500 py-1 px-4 rounded-md text-white font-semibold text-2xl mx-auto shadow-md mb-8"
    >
      <h3 id="item-description">{props.description}</h3>
      <div id="right" className="flex">
        <h3 id="item-price">{props.price}$</h3>
        <div id="menu">
          <i
            onClick={handleItemAction}
            className="fa fa-trash ml-6 mr-2 text-red-500 hover:text-red-700 cursor-pointer transition-all"
            onMou
          ></i>
          <i
            onClick={handleItemAction}
            className="fa fa-check text-green-400 hover:text-green-500 cursor-pointer transition-all"
          ></i>
        </div>
      </div>
    </div>
  );
}
