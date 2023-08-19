import React from 'react'
import '../App.css';
import { sideBarData } from './sidebar_data';


export default function Sidebar() {


    return (
        <div className='sidebar'>

            <div className="Slide-title">
                MY APP
            </div>
            <ul>
                {sideBarData.map((value, index) => {
                    return (
                        <li id={window.location.pathname === value.link ? 'active' : ''} className='nav-links' key={index} onClick={() => {
                            window.location.pathname = value.link;
                        }}
                        >
                            <div className="nav-Icon">
                                {value.icon}
                            </div>
                            <div className="nav-title">
                                {value.title}
                            </div>
                        </li>
                    );
                })}
            </ul>

        </div>
    )
}
