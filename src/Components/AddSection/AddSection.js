import React from "react";
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown} from "@fortawesome/free-solid-svg-icons";

function AddSection(){
    return(
        <>
            <div className="AddSection-wrapper">
                <div className="AddSection-row">
                    <h3 className="row-title">Śniadanie</h3>
                    <span className="row-kcal">837 kcal</span>
                    <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                    <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                </div>
                <div className="AddSection-row">
                    <h3 className="row-title">Lunch</h3>
                    <span className="row-kcal">997 kcal</span>
                    <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                    <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                </div>
                <div className="AddSection-row">
                    <h3 className="row-title">Obiad</h3>
                    <span className="row-kcal">791 kcal</span>
                    <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                    <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                </div>
                <div className="AddSection-row">
                    <h3 className="row-title">Kolacja</h3>
                    <span className="row-kcal">0 kcal</span>
                    <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                    <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                </div>
            </div>
        </>
    )
}

export default AddSection