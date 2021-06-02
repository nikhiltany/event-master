import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";




function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img
                className="header_icon" 
                src="https://i.ibb.co/tpLwtsb/download.png" 
                alt="" 
            />
            </Link>
           

            <div className='header_centre'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header_right'>
                <p>Sign-in</p> 
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />


            </div>
             
        </div>
    )
}

export default Header
