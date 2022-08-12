import { React } from 'react'
import HomePage from './components/HomePage'
import About from './components/About'
import Music from './components/Music'
import Footer from './components/Footer'
import './css/App.css'

export default function App(){

    return (
        <>
            <HomePage />
            <About />
            <Music />
            <Footer />
        </>
        
    );
}