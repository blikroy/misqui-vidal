import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';   
import customFetch from "../utils/CustomFetch";
import contenidos from "../utils/Contenidos";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoria } = useParams()

    useEffect(() => {
        if(categoria) {
            customFetch(2000, contenidos.filter(item => item.categoria === categoria))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }else {
            customFetch(2000, contenidos)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
        
    }, [categoria]);
    
    return(
        <>
        <section className='seccionCatalogo'>
            <ItemList datos={datos}/>
        </section>
        </>
    );
}
export default ItemListContainer;