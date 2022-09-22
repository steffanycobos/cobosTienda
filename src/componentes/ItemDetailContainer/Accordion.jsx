import React, { useState, useEffect } from "react";
import "./Accordion.css";
import Accordion from "react-bootstrap/Accordion";
import "../componentes/productos/cards.css";
import { getSingleItem } from "../../services/mockAPI";


function BasicExample() {
  let [data, setData] = useState({});

  useEffect(() => {
    getSingleItem(1).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div className="accordion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ver Más</Accordion.Header>
          <Accordion.Body>{data.detail}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default BasicExample;
