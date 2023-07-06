import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
      <Routes>
        <Route path={'/'} element={<ItemListContainer />} />
        <Route path={'/products/:category'} element={<ItemListContainer />} />
        <Route path={'/product/:id'} element={<ItemDetailContainer />} />
        {/* <Route path={'/cart'} element={<p>Cart</p>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
