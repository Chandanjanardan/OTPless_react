import React ,{useEffect,useState}from 'react';
import "./Navbar.css";

function Navbar({waName}) {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }   
        else handleShow(false)   ;  })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (

        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="navbar"/>
            {/* <img className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/> */}
            <div className='nav__avatar'>
            {waName && (
        <h3 className="nav__avatar">{`Hi ${waName}`}</h3>
      )}
            </div>
        </div>
    )
}

export default Navbar
