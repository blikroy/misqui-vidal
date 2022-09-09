import ItemList from './ItemList';
import { useState, useEffect } from "react";
import customFetch from "../utils/CustomFetch";
import contenidos from "../utils/Contenidos";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, contenidos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    
    return(
        <>
            <ItemList datos={datos}/>
        </>
    );
}
export default ItemListContainer;