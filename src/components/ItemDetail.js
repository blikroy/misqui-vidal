import ItemCount from "./ItemCount";

const ItemDetail = ({dato}) => {

    const alerta = (numero, producto) => {
        alert("Acabas de agregar " + numero + " " + producto)
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
                <ItemCount limite={4} inicio={1} alerta={alerta} producto={dato.nombre} />
            </div>
        </div>
        :<p>Cargando...</p>
       }
        </>
    );
}
export default ItemDetail;