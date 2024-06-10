import React from 'react'
import './IconSwitch.css'

export default function IconSwitch({icons, viewSwitch, view}) {
    return (
        view == 'module' ? 
            <div className={`icon ${view}`} onClick={() => viewSwitch(`list`)}>
                <img src={icons[1]} alt={`Icon`} />
            </div> :
            <div className={`icon ${view}`} onClick={() => viewSwitch(`module`)}>
                <img src={icons[0]} alt={`Icon`} />
            </div>
    );
}
