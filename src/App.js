import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Items from "./components/Items";

export default function App() {
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="App flex justify-center w-screen text-center">
      <div id="box" className=" w-2/4">
        <h1 className="text-7xl text-yellow-500 py-24 pb-12">Shopping List</h1>
        <Input
          setItemDescription={setItemDescription}
          itemDescription={itemDescription}
          setItems={setItems}
          items={items}
          itemPrice={itemPrice}
          setItemPrice={setItemPrice}
        />
        <Items items={items} setItems={setItems} />
      </div>
    </div>
  );
}
