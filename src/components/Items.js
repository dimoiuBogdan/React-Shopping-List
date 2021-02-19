import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Items(props) {
  const [total, setTotal] = useState(0);

  const getTotalPrice = () => {
    let total = 0;
    props.items.forEach((item) => {
      total += +item.price;
    });
    setTotal(total);
  };

  useEffect(() => {
    getTotalPrice();
  }, [props.items]);

  return (
    <div>
      {props.items.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            price={item.price}
            setItems={props.setItems}
            items={props.items}
          />
        );
      })}
      <h2 className="text-white font-semibold text-3xl mt-8">
        Total: {total}$
      </h2>
    </div>
  );
}
