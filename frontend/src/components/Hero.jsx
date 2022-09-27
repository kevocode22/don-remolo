import React from 'react'
import '../styles/index.css'
import Video from '../assets/videos/pizzaHot.mp4'
import { Link as LinkRouter} from 'react-router-dom'

const Hero = () => {


    return (
        <>
            <div className="containerVideo w-full">

                <video loop autoPlay muted >
                    <source src={Video} autoPlay />
                </video>
<div className="textHero">
    <h1>PIZZA & LOVE</h1>
    <p>MORE THAN JUST PIZZA</p> 
    <LinkRouter to="/products" className='ctaButton'><h2>ORDER NOW</h2></LinkRouter>
    
</div>
            </div>

            <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
                <div className="lg:w-72 px-6 lg:px-0">

                </div>
            </div>
        </>
    )

}

export default Hero