import React from 'react'
import '../css/HomePage.css'
import Navbar from './Navbar'


export default function HomePage(){

    return(
        <main className='home' id="home">

            <div className='main--side'>
                <Navbar />

                <div className='main--social'>

                    <a href='https://www.facebook.com/jzentella'><img src='/images/icons/icons8-facebook-50.png' alt='facebook--link' className='main--social-icon'/></a>

                    <a href='http://instagram.com/zentella_ja'><img src='/images/icons/icons8-instagram-24.png' alt='instagram--link' className='main--social-icon'/></a>

                    {/* <a href=''><img src='/images/icons/icons8-youtube-24.png' alt='youtube--link' className='main--social-icon'/></a> */}

                    <a href='https://soundcloud.com/javier-zentella'><img src='/images/icons/icons8-soundcloud-50.png' alt='soundcloud--link' className='main--social-icon'/></a>
                </div>

            </div>

            <div className='main--heading'>
                <h1 className='main--firstname'><span>J</span>avier</h1>
                <h2 className='main--surname'><span>Z</span>entella</h2>

            </div>
     




        </main>
    )
}