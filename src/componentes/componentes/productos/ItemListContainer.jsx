import React, { useState, useEffect } from "react";
import Card from "./cards";
import { DotWave } from "@uiball/loaders";
import "./cards.css";
import { useParams } from "react-router-dom";
import { getItems, getItemsByCategory } from "../../../services/firestore";
import "../../../grillas.css";

function ItemListContainer() {
  let [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return (
    <div>
      {isLoading ? (
        <div className="dots">
          <DotWave size={60} speed={1} color="orange" />
        </div>
      ) : (
        <div className="main container" id="grilla">
          {data.map((item) => {
            return (
              <Card
                className="productos"
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                detail={item.detail}
                stock={item.stock}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
