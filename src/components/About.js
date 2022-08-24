import React, { useEffect, useState } from "react";
import '../css/About.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import ReactPlayer from "react-player"


export default function About(){

    const [more, setMore] = useState(false)
    useEffect(() => {
        Aos.init({ offset:400, duration: 2000 })
    }, [])


    const handleClick = () => {
        setMore(prevState => !prevState)
    }

    
    return(
        <section className="about" id="about">

            <section data-aos='fade-right' className="about--right">

                <h2 className="about--title">Sobre el artista:</h2>
                <p className="about--info">Nacido en Tabasco y formado como compositor en Fermatta College of Music, Javier ha viajado por la mayor parte de México, Canadá y Europa, absorbiendo conocimientos musicales de cada región con el fin de encontrarse a sí mismo y con ello formar una identidad musical propia; actualmente vive en el caribe mexicano produciendo música con su colega Germán Celis en los estudios Chanek. </p>
                <span className="hidden more-btn" onClick={ handleClick }>{ more ? 'less' : 'more'}</span>
            </section>

            <div data-aos='fade-left' className="soundcloud-player">

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