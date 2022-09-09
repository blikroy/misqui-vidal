import Item from './Item';

const ItemList = ({ datos }) => {
    
    return(
        <>
            {
                datos.length > 0
            ? datos.map(dato => <Item key={dato.id} nombre={dato.nombre} img={dato.img} />)
            : <p>Cargando...</p>
                
            }
        </>
    );
}
export default ItemList;