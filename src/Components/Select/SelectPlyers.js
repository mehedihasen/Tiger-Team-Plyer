import React from 'react';
import "./selectPlyer.css"

const SelectPlyers = (props) => {
 console.log(props.totalSeletedplyer);
const selary = props.totalSeletedplyer;
const total = selary.reduce((total, pl)=> total + pl.salary ,0)



    return (
        <div className = "saummry">
            <h2>Select Player Saummry</h2>
            <h3>seletde plyers :{props.totalSeletedplyer.length} </h3>
            {
                selary.map(pl => <div className="plyer" >
                    <h4> {pl.name} <span className = "color">salary $</span>{pl.salary}</h4>
                  
                </div>)
            }
            <h3>Total Budget : {total}</h3>
        </div>
    );
};

export default SelectPlyers;