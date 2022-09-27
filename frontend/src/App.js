import './styles/index.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import pizzasActions from './redux/actions/pizzasActions';

function App() {
  let dispatch= useDispatch()

  useEffect(() =>{
    dispatch(pizzasActions?.getPizzas())
    //eslint-disable-next-line
  },[])


return (
<>
      <Nav/>
      <Toaster
            position="bottom-center"
            toastOptions={{
              className: '',
              style: {
                boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
                padding: '1rem',
                color: 'black',
                textAlign: "center",
                fontSize: "16px",
                border: "5px solid #FF8E72",
              },
            }} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
