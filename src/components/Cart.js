import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const carrito = useContext(CartContext)
    if(carrito.cartList.length === 0) {
        return(
            <>
                <h1>No hay Productos en el carrito</h1>
                <Link to="/"><button>Ir a comprar</button></Link>
            </>
        );
    }
    return(
        <>
            <h1>Mi carrito</h1>
            <table width='400px'>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acción</th>
                </tr>
                {
                    carrito.cartList.map(item => 
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.cantidad * item.precio}</td>
                            <td><button onClick={() => carrito.removeItem(item.id)}>Borrar</button></td>
                        </tr>                    
                    )
                }
                <br/>
                <tr>
                    <td>Total de la compra: {carrito.precioTotal()}</td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
                <br/>
                <tr>
                    <td><button onClick={carrito.clear}>Borrar todo el carrito</button></td>
                    <td></td>
                    <td></td>
                    <td></td>

                </tr>
            </table>
        </>
    );

}
export default Cart;