import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section className='seccionCatalogo'>
        <ItemListContainer />
      </section>
    </>
  );
}
export default App;
