import React from "react";
import './style.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Main(){

    const percentage = 75;
    return(
        <div className="main-wrapper">
            <div className="circleStats-wrapper">
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                styles={{trail: {
                    stroke: '#D9D9D9',
                },
                path:{
                    stroke: '#2AED19'
                },
                text: {
                // Text color
                fill: '#2AED19',
                fontWeight: '600',
                fontSize: '25px'
                }
                }}
            />
            </div>
            <div className="mainInfo-wrapper">
                <div className="kcal-wrapper">
                    <span className="kcal mainInfoHeader">Kalorie <span className="kcalValue mainInfoValue">2625 kcal</span></span>
                    <span className="kcalRem mainInfoHeader">Pozostało <span className="kcalRemValue mainInfoValue">875 kcal</span> </span>
                </div>
                <div className="macros-wrapper">
                    <span className="protein mainInfoHeader">Białko <span className="proteinValue">69.8</span> </span>
                    <span className="fat mainInfoHeader">Tłuszcze <span className="fatValue">24.4</span></span>
                    <span className="carbohydrates mainInfoHeader">Węglowodany <span className="carbohydratesValue">73.5</span></span>
                </div>
                <div className="timeOfDay-wrapper">
                    <span className="breakfast mainInfoHeader">Śniadanie <span className="breakfastValue mainInfoValue">837</span></span>
                    <span className="lunch mainInfoHeader">Lunch <span className="lunchValue mainInfoValue">997</span></span>
                    <span className="dinner mainInfoHeader">Obiad <span className="dinnerValue mainInfoValue">791</span></span>
                    <span className="supper mainInfoHeader">Kolacja <span className="supperValue mainInfoValue">0</span></span>
                </div>
            </div>
        </div>
    )
}

export default Main