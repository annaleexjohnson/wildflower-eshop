import './App.css';
import Home from './components/Home.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import {ProductProvider} from './components/ProductContext'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path = '/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
