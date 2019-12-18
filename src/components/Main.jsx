import React, { memo } from 'react'
import './Main.css'
import island2 from '../images/island2.jpg'

const Main = ({ handleClick }) => {
    let hamburgerWrapper = React.createRef();
    let mainContainer = React.createRef();
    return (
        <div className="main-container" onClick={(e) => handleClick(e, mainContainer)} ref={mainContainer}>
            <header>
                <div className="hamburger-wrapper" onClick={(e) => handleClick(e, hamburgerWrapper)} ref={hamburgerWrapper}>
                    <div className="hamburger-icon">
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>
                <h1 className="title">Lorem Ipsum Dolor</h1>
            </header>
            <img src={island2} alt="island" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet mauris. Lectus arcu bibendum at varius vel pharetra vel turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default memo(Main)