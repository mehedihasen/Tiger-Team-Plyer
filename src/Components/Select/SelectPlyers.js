import React from 'react';
import "./selectPlyer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SelectPlyers = (props) => {
 console.log(props.totalSeletedplyer);
const selary = props.totalSeletedplyer;
const total = selary.reduce((total, pl)=> total + pl.salary ,0)



    return (
        <div className = "saummry">
            <h2>Select Player Saummry</h2>
            <h3>seletde plyers :{props.totalSeletedplyer.length} </h3>
            <h3> plyer name - plyer salary</h3>
            {
                selary.map(plyer => <div className="plyer" >
                   
                    <h4><FontAwesomeIcon icon={faUserCircle} /> {plyer.name} <span className = "color">salary $</span>{plyer.salary}</h4>
                  
                </div>)
            }
            <h3>Total Budget : {total}</h3>
        </div>
    );
};

export default SelectPlyers;