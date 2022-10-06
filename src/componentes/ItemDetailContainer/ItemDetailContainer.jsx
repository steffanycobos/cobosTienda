import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { DotWave } from '@uiball/loaders'

function ItemDetailContainer() {
  let [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
    .then((respuestaDatos) => setData(respuestaDatos))
    .catch((errormsg) => {
      setError(errormsg.message);
    })
    .finally(() => setIsLoading(false));
}, [id]);

if (isLoading) {
  return (
    <>
      {error ? (
        <div>
          <h2 >Error obteniendo los datos!!</h2>
          <p>{error}</p>
        </div>
      ) : (
       
<DotWave 
 size={47}
 speed={1} 
 color="black" 
/>
      )}
    </>
  );
}

return (
  <div>
    <ItemDetail item={data} />
  </div>
);
}
export default ItemDetailContainer;