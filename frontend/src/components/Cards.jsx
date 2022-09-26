import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/index.css'
import { useSelector } from 'react-redux'


const Cards = () => {

  const pizzasP = useSelector(store => store.pizzasReducers.pizzas.pizzas)
console.log(pizzasP)  


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
            <LinkRouter to="#" className="buttonCart block bg-gray-300 py-2 px-2 text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>Add to cart</LinkRouter>
        </div>
    </div>
</div>
</div>
)}
    </>
  )
}

export default Cards