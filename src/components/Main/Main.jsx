import React from 'react';
import './Main.css';

export default function Main() {
    return(
        <div className='main'>
            <div className='mainItem'>
                <img src="https://i.pinimg.com/474x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" alt="" className='mainImg' />
                <div className='imgTitle'>
                    <h1>HÀ NỘI</h1>
                    <h2>properties</h2>
                </div>
            </div>

            <div className='mainItem'>
                <img src="https://i.pinimg.com/474x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" alt="" className='mainImg' />
                <div className='imgTitle'>
                    <h1>TP HỒ CHÍ MINH</h1>
                    <h2>properties</h2>
                </div>
            </div>

            <div className='mainItem'>
                <img src="https://i.pinimg.com/474x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg" alt="" className='mainImg' />
                <div className='imgTitle'>
                    <h1>ĐÀ NẴNG</h1>
                    <h2>properties</h2>
                </div>
            </div>
        </div>
    );
}
