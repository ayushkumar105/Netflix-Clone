import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const history =  useNavigate(); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else
            {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", onscroll);
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            
            <img
            onClick={() => {
                history('/');
            }}
                className="nav__logo"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
            />

            <img
            onClick={() => {
                history('/profile');
            }}
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav