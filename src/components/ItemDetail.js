const ItemDetail = ({dato}) => {
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
            </div>
        </div>
        :<p>Cargando...</p>
       }
        </>
    );
}
export default ItemDetail;