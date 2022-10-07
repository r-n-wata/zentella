import React from 'react'
import Navbar from './Navbar'


export default function HomePage(){

    return(
        <main className='bg-homepage bg-fixed h-screen bg-center w-full text-gray-200 flex bg-cover bg-no-repeat overflow-x-hidden' id="home">

            <div className='w-28  h-full gap-20 flex flex-col desktop:w-1/2 desktop:relative '>
                <Navbar />

                <div className='flex flex-col gap-8 justify-end pb-6 ml-8  h-full w-full  desktop:pl-4'>

                    <a href='https://www.facebook.com/jzentella'><img src='/images/icons/icons8-facebook-50.png' alt='facebook--link' className='w-8  '/></a>

                    <a href='http://instagram.com/zentella_ja'><img src='/images/icons/icons8-instagram-24.png' alt='instagram--link' className='w-8 '/></a>

                    {/* <a href=''><img src='/images/icons/icons8-youtube-24.png' alt='youtube--link' className='main--social-icon'/></a> */}

                    <a href='https://soundcloud.com/javier-zentella'><img src='/images/icons/icons8-soundcloud-50.png' alt='soundcloud--link' className='w-8 '/></a>
                </div>

            </div>

            <div className='-mt-12 pr-6 w-[100vw] flex flex-col items-end justify-center text-gray-100 text-shadow z-20 relative'>
                <h1 className='text-5xl font-medium drop-shadow-md mb-0 text-gray-100 h-auto overflow-y-hidden tablet:text-6xl desktopt:text-7xl font-mink '><span>J</span>avier</h1>
                <h2 className='text-6xl mt-4 text-gray-100 h-auto overflow-y-hidden tablet:text-7xl desktop:text-8xl font-mink  tablet:w-auto'><span className='text-orange-400'>Z</span>entella</h2>

                

            </div>
     




        </main>
    )
}