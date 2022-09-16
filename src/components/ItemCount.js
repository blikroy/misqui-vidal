import { useState } from 'react'

export const ItemCount = ({limite, inicio, alerta, producto}) => {
    const [contador, setContador] = useState(inicio)

    const restar = () => {
        if(contador >= 2) {
            setContador(contador-1);
        }
    }

    const sumar = () => {
        if(contador <= limite){
            setContador(contador+1)
        }
    }
  return (
    <>
    <button onClick={restar}>-</button>
    <span>{contador}</span>
    <button onClick={sumar}>+</button>
    <br/>
    <button onClick={()=>alerta(contador, producto)}>AGREGAR</button>
    </>
  )
}

export default ItemCount