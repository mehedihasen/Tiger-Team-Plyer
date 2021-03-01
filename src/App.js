
import './App.css';
import plyers from './data/plyers.json'
import { useEffect, useRef, useState } from 'react';

import PlyersInfo from './Components/plyers-list/PlyersInfo';
import SelectPlyers from './Components/Select/SelectPlyers';

function App() {
 const [plyer, setPlyer] = useState([])
 useEffect(()=>{
   setPlyer(plyers)
 }, [])
const [seletplyers, setSeletplyer]= useState([])

const totalSeleted=(plyer)=>{

 const newSeletplyer = [...seletplyers, plyer];

 setSeletplyer(newSeletplyer)

}
  return (
    <div className="App">
      <h1>Tiger Team</h1>
    <div className="sub-continer">
      <div className="plyerlistItem">
        {
            plyer.map(plyerOb=> <PlyersInfo  plyerdata={plyerOb} key={plyerOb.id}  totalSeleted={totalSeleted} ></PlyersInfo> )
          }
      </div>
      <div >
          <SelectPlyers totalSeletedplyer = {seletplyers} ></SelectPlyers>
      </div>
    </div>
        
     </div>
  );
}

export default App;
