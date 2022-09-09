import ItemList from './ItemList';
import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
const { contenidos } = require('../utils/Contenidos');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, contenidos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    console.log(datos);
    
    return(
        <>
        <ItemList items={datos}/>
      </>
    );
}
export default ItemListContainer;