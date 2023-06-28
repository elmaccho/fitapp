import React, { useState } from "react";
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ItemSearch(){
    const [toggle, setToggle] = useState(false)

    const toggleMe = (params) => {
        setToggle(!toggle)
    }

    return(
        <div className={`ItemSearch-wrapper ${toggle ? "toggleMe" : ""}`}>
            <button onClick={toggleMe} className="retBtn">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>

            <div className="Search-pannel">
                <input className="SearchInput" type="text" placeholder="Wyszukaj produkt..."></input><button className="SearchBtn" >Szukaj</button>
            </div>
            <div className="Search-list">
                <span>eeeeeeeeeeeeeeeeeeee</span>
                <span>eeeeeeeeeeeeeeeeeeee</span>
                <span>eeeeeeeeeeeeeeeeeeee</span>
                <span>eeeeeeeeeeeeeeeeeeee</span>
                <span>eeeeeeeeeeeeeeeeeeee</span>
            </div>
        </div>
    )
}

export default ItemSearch