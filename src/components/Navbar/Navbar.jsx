import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="nav">
            <div className="navContainer">
                <div className="navWebName">
                    <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
                        lamabooking
                    </Link>
                </div>
                <div>
                    <button className="navBtn">
                        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>Đăng ký</Link>
                    </button>
                    <button className="navBtn">
                        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}