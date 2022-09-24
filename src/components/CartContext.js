import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (contenidos, cantidad) => {
        //busco en mi array de CartList con find si el id que voy a cargar ya se encuentra o no
       

        //si no lo encontro que cargue normal
        if(cartList.find(c => c.id === contenidos.id)) {
             //averiguamos posición del objeto en el array
             const index = cartList.findIndex(p => p.id === contenidos.id);

             //buscamos solo el objeto con la posición
             const producto = cartList[index];
 
             //le sumo la cantidad nueva a la cantidad que ya se encontraba en el carrito
             producto.cantidad = producto.cantidad + cantidad;
 
             //creo un nuevo array ya con los datos modificados del carrito anterior
             const newCart = [...cartList];
 
             //al nuevo carrito le agrego todos los cambios que hice en cantidad
             newCart.splice(index, 1, producto);
 
             //seteo el nuevo array a mi useState.
             setCartList([...newCart]);
        }else {
            const listaCantidad = {
                ...contenidos, cantidad: cantidad
            }
            setCartList([...cartList, listaCantidad])
           

        }
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }
    const clear = ()=> {
        setCartList([]);
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;