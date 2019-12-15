import React, { memo } from 'react'
import './Main.css'

const Main = ({ handleClick }) => {
    return (
        <div className="main-container">
            <header>
                <div className="hamburger-wrapper">
                    <div className="hamburger-icon" onClick={handleClick}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>
                <h1 className="title">Menu</h1>
            </header>
        </div>
    )
}

export default memo(Main)