import './App.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      {/*
        <section className='seccionCatalogo'>
          <ItemListContainer />
        </section>
      */}
      <ItemDetailContainer />
    </>
  );
}
export default App;
