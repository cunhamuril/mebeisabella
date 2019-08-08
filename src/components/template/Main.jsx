import React from "react";

import Carousel from './Carousel'
import About from '../sections/About'
import Galery from '../sections/Galery'
import Contact from '../sections/Contact'

const Main = () => {
    return (
        <div className="main">
            <Carousel />
            <About />    
            <Galery />    
            <Contact />
        </div>
    )
}

export default Main