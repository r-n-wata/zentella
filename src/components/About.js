import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import ReactPlayer from "react-player"


export default function About(){

   
    useEffect(() => {
        Aos.init({ offset:400, duration: 2000 })
    }, [])


    
    return(
        <section className="bg-about h-auto flex flex-col relative pt-16 pb-16 desktop:flex-row  desktop:items-center desktop:h-screen" id="about">

            <section data-aos='fade-right' className="w-3/4 pt-10 pr-6 pb-20 pl-6 h-auto bg-black flex flex-col items-end abolute left-0 top-8 text-gray-100 desktop:w-1/2 desktop:">

                <h2 className="font-italiana text-right leading-10 text-4xl overflow-y-hidden">Sobre el artista:</h2>
                <p className="font-inter text-right  leading-7 mt-4">Nacido en Tabasco y formado como compositor en Fermatta College of Music, Javier ha viajado por la mayor parte de México, Canadá y Europa, absorbiendo conocimientos musicales de cada región con el fin de encontrarse a sí mismo y con ello formar una identidad musical propia; actualmente vive en el caribe mexicano produciendo música con su colega Germán Celis en los estudios Chanek. </p>
             
            </section>

            <div data-aos='fade-left' className="relative w-1/2 h-1/4  left-40 desktop:w-1/4 desktop:h-3/4 desktop:brightness-50">

                <ReactPlayer
                    url="https://soundcloud.com/javier-zentella"
                    className='react-player'
                    width='100%'
                    height='100%'
                />

            </div>

        </section>
    )
}