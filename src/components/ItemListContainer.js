import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const alerta = (numero) => {
        alert("Acabas de agregar " + numero + " productos")
    }
    return(
        <>
        <h1>{props.saludo}</h1>
        <ItemCount limite={4} inicio={1} alerta={alerta} />
      </>
    );
}
export default ItemListContainer;