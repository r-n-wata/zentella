import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import '../css/Navbar.css'

export default function Navbar(){

    const [open, setOpen] = React.useState(true)

    function toggleOpenClose(){
        setOpen(prevOpen => !prevOpen)
    }

   


    return (
        <div className="navbar fixed z-40" style={{width: !open && '20%'}}>    
            <div className="navbar--toggle">
                {open && <img src='/images/icons/openNav.png' alt="open nav icon" className="openNav--img" onClick={toggleOpenClose}/> }
                {/* // : <div className="close--img-container">
                //     */}
                {/* //     
                {/* //     </div>} */}

                <nav className={!open? 'navbar--menu active' : 'navbar--menu'} >

                    <div className="navbar--menu-options">
                        <div className="close--img-container">

                           <img src="/images/icons/closenav.png"    alt="close nav icon" onClick={toggleOpenClose} className="closeNav--img" />   
                        </div>
                       
                      
                        <Link to="#home">Home</Link>
                        <Link to="#about">About</Link>
                        <Link to="#music">Music</Link>
                    </div>

                </nav>


                </div>

            
            

        </div>
    )
}