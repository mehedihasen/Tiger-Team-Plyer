import React from 'react';

import "./plyersinfo.css"

const PlyersInfo = (props) => {

     const {image, name, salary} = props.plyerdata;

    return (
        
       <div>
               <div className="showPlyerInfo">
            <img src={image} alt=""/>
            <div className="plyerdata">
                <h3>{name}</h3>
                <h4> salary : {salary}</h4>
                <button onClick={() =>props.totalSeleted(props.plyerdata)}>select</button>
             </div>`
            </div>
            
         
       </div>
       
    );
};

export default PlyersInfo;