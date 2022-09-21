import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({dato}) => {
    const [contador, setContador] = useState(0)
    const alerta = (numero, producto) => {
        alert("Acabas de agregar " + numero + " " + producto)
        setContador(numero);
    }
    return(
        <>
       {dato.img

       ?
        <div className="detalleItem">
            <div className="imagenDetalles"><img src={dato.img} alt={dato.nombre}/></div>
            <div className="detallesItem">
                <h1>{dato.nombre}</h1>
                <p>{dato.detalle}</p>
                <h3>Precio: ${dato.precio}</h3>
                {
                contador === 0 ?
                <ItemCount limite={4} inicio={0} alerta={alerta} producto={dato.nombre} />
                : <Link to="/cart"><button>Ir al Carrito</button></Link>
                }
            </div>
        </div>
        :<p>Cargando...</p>
       }
        </>
    );
}
export default ItemDetail;