import React from "react";
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <header>
            <h1 className="title">FitApp</h1>
            <div className="week-wrapper">
                <div className="days-wrapper">
                     <button><h2>P</h2><span>19</span></button>
                     <button><h2>W</h2><span>20</span></button>
                     <button><h2>Ś</h2><span>21</span></button>
                     <button><h2>C</h2><span>22</span></button>
                     <button><h2>P</h2><span>23</span></button>
                     <button><h2>S</h2><span>24</span></button>
                     <button><h2>N</h2><span>25</span></button>
                </div>
                <button className="prevDay sliderBtn"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
                <button className="nextDay sliderBtn"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>
            </div>
        </header>
    )
}

export default Header