import React, { useState, useEffect } from "react";
import Card from "./cards";
import getItems from "../../../services/mockAPI";
import "./cards.css"

function ItemListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="container">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
              stock={item.stock}
            />
          );
        })}
      </div>
    </div>
  );}
  export default ItemListContainer;