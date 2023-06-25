import React from "react";
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown, faXmark} from "@fortawesome/free-solid-svg-icons";

function AddSection(){
    return(
        <>
            <div className="AddSection-wrapper">
                <div className="AddSection-row">
                    <div className="AddSection-sett">
                        <h3 className="row-title">Śniadanie</h3>
                        <span className="row-kcal">837 kcal</span>
                        <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                        <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    </div>
                    <div className="AddSection-list">
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>

                <div className="AddSection-row">
                    <div className="AddSection-sett">
                        <h3 className="row-title">Lunch</h3>
                        <span className="row-kcal">837 kcal</span>
                        <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                        <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    </div>
                    <div className="AddSection-list">
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>

                <div className="AddSection-row">
                    <div className="AddSection-sett">
                        <h3 className="row-title">Obiad</h3>
                        <span className="row-kcal">837 kcal</span>
                        <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                        <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    </div>
                    <div className="AddSection-list">
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>

                <div className="AddSection-row">
                    <div className="AddSection-sett">
                        <h3 className="row-title">Kolacja</h3>
                        <span className="row-kcal">837 kcal</span>
                        <button className="showMoreBtn"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
                        <button className="addMoreBtn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    </div>
                    <div className="AddSection-list">
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                        <div className="list-row">
                            <span className="itemName">Mięso z piersi z kurczaka</span>
                            <div className="itemMacros">

                                <span className="itemWeight">200 g</span>
                                <span className="itemKcal"> 198 kcal</span>
                                <span className="itemProtein">43 B</span>
                                <span className="itemFat">2.6 T</span>
                                <span className="itemCarbo">0 W</span>

                            </div>
                            <button className="deleteItemBtn"><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSection