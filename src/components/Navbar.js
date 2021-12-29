import React,{useState} from 'react';
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
    const[openLinks,setOpenLinks]=useState(false);
    const toggleNvbar=()=>{
        setOpenLinks(!openLinks);
    };
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks? "open":"close"}>
                <img src={Logo}/>
            </div> 
            <div className='rightSide'>
                <Link to="/">Home</Link>    
                <Link to="/menu">Menu</Link>    
                <Link to="/about">About</Link>    
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNvbar}>
                    <ReorderIcon/>
                </button>    
            </div> 
        </div>
    )
}

export default Navbar
