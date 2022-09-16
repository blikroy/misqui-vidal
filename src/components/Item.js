import { Link } from "react-router-dom";

const Item = ({ id, nombre, img }) => {
    
    return(
        <>
           <div className="boxItems">
                <img src={img} alt=""/>
                <h3>{nombre}</h3>
                <Link to={'/item/'+id}><button>Ver Más</button></Link>
           </div>
        </>
    );
}
export default Item;