import React from 'react'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/index.css'



const Cards = () => {

  const user = useSelector(store => store.usersReducers.user)
  const pizzasP = useSelector(store => store.pizzasReducers.pizzas.pizzas)
console.log(pizzasP)  

async function addProductToCart(event) {
  if (user) {
      const idProduct = event.target.id
      dispatch(shoppingActions.addProduct(idPack))
      dispatch(shoppingActions.getUserProducts())
      setReload(!reload)
  } else {
      toast.error("Primero Inicie Sesion")
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
          navigate("/signin")
      }, 1500)
  }
}

  return (
    <>
    {pizzasP?.map((p, index) => 
 <div className="cardsPizza py-5 flex justify-center items-center mx-4" >
  <div className="pizzaCard">
    <div className="containerData bg-white shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
        <div className="containerImgCard">  
            <img src={p.image} alt="Italian Pizza" className="imageCard rounded-t"/>
        </div>
       
        <div className="dataText p-4">
            <h2 className="text-2xl uppercase">{p.name}</h2>
            <p className="font-light text-gray-500 text-lg my-2">Price: {p.price}</p>
            <p>{p.description}</p>
            <LinkRouter to="#" className="block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out">Add to cart</LinkRouter>
        </div>
    </div>
</div>
</div>
)}
    </>
  )
}

export default Cards