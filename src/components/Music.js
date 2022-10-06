import React, { useEffect } from "react";
import '../css/Music.css'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Music(){

    const background = require('../imgs/background-light.avif')
    
    useEffect(() => {
        Aos.init({ offset:400, duration: 2000 })
    }, [])



    return (
        <section className="music" id="music">
            <img src={ background } alt='background' className='background'/>

              
            <section data-aos='fade-left' className="music--right">
                <input type='checkbox' id='check'/>
                <h2 className="music--title">Sobre su música:</h2>
                <p className='music--info'>Es una sutil mezcla entre lo moderno y lo antiguo, reflexivo y lúdico, puede notarse influencias de compositores como Jorge Reyes reinventando patrones musicales que nos conecta con las raíces mexicanas precolombinas , así cómo ritmos folklóricos de Tabasco y Veracruz; el flamenco, la música balcánica, el jazz, rock progresivo, funk así como géneros más modernos como el low-fi hiphop, neosoul y trap.</p>
                
                <p className="more">El objetivo principal de su música es tocar el alma de quienes lo escuchan y sensibilizar el espíritu con el fin de liberarlo y entregarse enteramente a su disfrute. Otros artistas que lo han influenciado podrían ser, Miles Davis, The badplus, Yasser Tejeda, así como de su colega Juan Miguel Rivera.
                    </p> 
                <label for='check'>Lee mas...</label>
                
            </section>


            
            

           


        
        </section>
    )
}