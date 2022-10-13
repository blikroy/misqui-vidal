import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
    const carrito = useContext(CartContext)

    const [ordenesLista, setOrdenes] = useState();

    const orden = {
        usuario: {
            nombre: 'roy2',
            apellido: 'vidal',
            email: 'royvidal@email.com',
            direccion: 'calle falsa - 123',
            telefono: 1122334455
        },
        producto: carrito.cartList.map(item => ({id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad})),
        total: carrito.precioTotal(),
    }
    const [hayOrden, setHayOrden] = useState(false)
    const finalizar = () => {
        const db = getFirestore();
        const ordenes = collection(db, 'ordenes');
        addDoc(ordenes, orden)
        .then(({id})=> setOrdenes(id));
        carrito.clear();
        setHayOrden(true);
    }

    if(hayOrden === true){
        return(
            <>
           <h1>la orden se tomo con exito</h1>
           <h2>Id: del pedido: {ordenesLista}</h2>
            </>
        );
    }
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
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
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
                    <br></br>
                    <tr>
                        <td>Total de la compra: {carrito.precioTotal()}</td>
                        <td></td>
                        <td></td>
                        <td><button onClick={carrito.clear}>Borrar todo el carrito</button></td>

                    </tr>
                    <br/>
                    <tr>
                        <td><button onClick={finalizar}>Finalizar Compra</button></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                </tbody>
            </table>
        </>
    );

}
export default Cart;