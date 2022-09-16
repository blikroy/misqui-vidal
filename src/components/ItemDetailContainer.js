import ItemDetail from './ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import customFetch from "../utils/CustomFetch";
import contenidos from "../utils/Contenidos";

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFetch(2000, contenidos.find(item => item.id === parseInt(id)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [id]);
    
    return(
        <>
            <ItemDetail dato={dato}/>
        </>
    );
}
export default ItemDetailContainer;