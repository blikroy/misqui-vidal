import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo='Bienvenido a mi Tienda' />
    </>
  );
}
export default App;
