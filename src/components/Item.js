const Item = ({ id, nombre, img }) => {
    
    return(
        <>
           <div className="boxItems">
                <img src={img} />
                <h3>{nombre}</h3>
                <button>Ver Más</button>
           </div>
        </>
    );
}
export default Item;