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
        <section className="h-auto flex justify-center flex-col overflow-hidden relative pt-20 pb-20 items-center w-full desktop:h-screen" id="music">
            <img src={ background } alt='background' className='background brightness-50 absolute min-h-[130vh] object-cover  desktop:h-[110vh] tablet:min-h-[100vh]  desktop:w-screen '/>

              
            <section data-aos='fade-left' className="pt-8 pb-8 pl-8 pr-8 bg-black flex flex-col items-center w-4/5 text-gray-100">
                <input type='checkbox' id='check'/>
                <h2 className="font-italiana text-center leading-10 text-4xl overflow-y-hidden">Sobre su música:</h2>
                <p className='font-inter text-center leading-7 mt-4 tracking-wide'>Es una sutil mezcla entre lo moderno y lo antiguo, reflexivo y lúdico, puede notarse influencias de compositores como Jorge Reyes reinventando patrones musicales que nos conecta con las raíces mexicanas precolombinas , así cómo ritmos folklóricos de Tabasco y Veracruz; el flamenco, la música balcánica, el jazz, rock progresivo, funk así como géneros más modernos como el low-fi hiphop, neosoul y trap.</p>
                
                <p className="more font-inter text-center leading-7 mt-4">El objetivo principal de su música es tocar el alma de quienes lo escuchan y sensibilizar el espíritu con el fin de liberarlo y entregarse enteramente a su disfrute. Otros artistas que lo han influenciado podrían ser, Miles Davis, The badplus, Yasser Tejeda, así como de su colega Juan Miguel Rivera.
                    </p> 
                <label htmlFor='check' className="tablet:hidden" >leer mas...</label>
                
            </section>


            
            

           


        
        </section>
    )
}