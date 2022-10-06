import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import './Home.css';

export default function Home() {
    return(
        <div className="home">
            <Navbar />
            <Header/>
            <div className="homeContainer">
                <Main/>
            </div>
        </div>
    );
}