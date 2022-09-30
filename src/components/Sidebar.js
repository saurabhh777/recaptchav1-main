import './Sidebar.css'
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import pfp from '../images/pfp.png'


const Sidebar = () => {
    const menuItem = [
        {
            path: "features",
            name: "Dashboard",
        },
        {
            path: "roles",
            name: "Role Management",
        },
        {
            path: "analytics",
            name: "Project Management",
        },
        {
            path: "",
            name: "xxxxxxxxxx",
        },
        {
            path: "",
            name: "xxxxxxxxxx",
        },
        {
            path: "",
            name: "xxxxxxxxxx",
        }
    ]



    return (
        <div className="container">
            <div className="sidebar" >
                <div className="top_section">
                    <img src={pfp} alt="pfp" style={{ display: "block" }} className="pfp" height="80px" />
                    <div className="welcome">
                        <p style={{ display: "block" }} className="logo">Welcome</p>
                        <p>username</p>
                    </div>
                </div>
                <div className="routes">
                    <h6>HR</h6>
                    {
                        menuItem.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className="link"
                            >
                                <div style={{ display: "block" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main >
                <Outlet />
            </main>
        </div>
    );
};

export default Sidebar;