import React from "react";
import './Filter.css'

function Header(){
    return(
        <div className="head">
            <div className="label">
                <a>Filter By:</a>
            </div>
            <div className="types">
                <button id="unread">Unread</button>
                <button id="read">Read</button>
                <button id="fav">Favorites</button>
            </div>
        </div>
    )
}

export default Header;