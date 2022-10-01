import ItemDetail from './ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const dbProductos = doc(db, "misqui", id);
        getDoc(dbProductos)
        .then(res=> setDatos({id: res.id, ...res.data()}))
    }, [id]);
    
    return(
        <>
            <ItemDetail dato={dato}/>
        </>
    );
}
export default ItemDetailContainer;