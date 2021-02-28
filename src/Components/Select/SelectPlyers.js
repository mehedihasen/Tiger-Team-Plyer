import React from 'react';

const SelectPlyers = (props) => {
 console.log(props.totalSeletedplyer);
//    const valu = name.reduce((total, pord) => total + pord.salary ,0)

    return (
        <div>
            <h3>Select Player Saummry</h3>
            <h4>seletde plyers :{props.totalSeletedplyer.length} </h4>

        </div>
    );
};

export default SelectPlyers;