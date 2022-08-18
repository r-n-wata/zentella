import { React } from 'react'
import HomePage from './components/HomePage'
import About from './components/About'
import Music from './components/Music'
import Footer from './components/Footer'
import SliderShow from './components/Carousel'
import './css/App.css'

export default function App(){

    return (
        <>
            <HomePage />
            <About />
            <SliderShow/>
            <Music />
            <Footer />
        </>
        
    );
}