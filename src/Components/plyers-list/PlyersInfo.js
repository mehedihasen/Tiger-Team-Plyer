import React from 'react';
import "./plyersinfo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { color } from 'react-bootstrap';

const PlyersInfo = (props) => {

     const {image, name, salary} = props.plyerdata;

    return (
        
       <div>
               <div className="showPlyerInfo">
            <img src={image} alt=""/>
            <div className="plyerdata">
                <h3>{name}</h3>
                <h4> salary : {salary}</h4>
                <Button  onClick={() =>props.totalSeleted(props.plyerdata) }>select</Button>
             </div>
            </div>
            
       </div>

       
    );
};

export default PlyersInfo;