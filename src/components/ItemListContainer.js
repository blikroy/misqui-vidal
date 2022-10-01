import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { categoria } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const dbProductos = collection(db, "misqui");
        if(categoria) {
            const bdFiltro = query(dbProductos, where('categoria', '==', categoria))
            getDocs(bdFiltro)
            .then(res=> setDatos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }else {
            getDocs(dbProductos)
            .then(res=> setDatos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
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