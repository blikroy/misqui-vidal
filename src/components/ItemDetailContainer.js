import ItemDetail from './ItemDetail';
import { useState, useEffect } from "react";
import customFetch from "../utils/CustomFetch";
import contenidos from "../utils/Contenidos";

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});

    useEffect(() => {
        customFetch(2000, contenidos[1])
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);
    
    return(
        <>
            <ItemDetail dato={dato}/>
        </>
    );
}
export default ItemDetailContainer;