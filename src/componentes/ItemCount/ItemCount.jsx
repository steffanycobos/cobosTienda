import React from "react";
import "./ItemCount.css"

function ItemCount(props) {

const [count, setCount]= React.useState(0)

    function OnAdd() {
        count >= 5 ? alert("No tenemos mas stock del producto solicitado") : setCount(count + 1)
    } 

function OnSubtract(){
    if (count>0){
   setCount(count - 1)}
}
return (
    <div className="contador2">
    <div className="contador">
        <button onClick={OnSubtract} className='sumaresta'> - </button>  
   <p>{count}</p>
        <button onClick={OnAdd} className='sumaresta'> + </button>
       
    </div>
    </div>
)
}

export default ItemCount;