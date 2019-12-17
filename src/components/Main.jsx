import React, { memo } from 'react'
import './Main.css'

const Main = ({ handleClick, setClosed }) => {
    let hamburgerWrapper = React.createRef();
    let mainContainer = React.createRef();
    return (
        <div className="main-container" onClick={(e) => handleClick(e, mainContainer)} ref={mainContainer}>
            <header>
                <div className="hamburger-wrapper" onClick={(e) => handleClick(e, hamburgerWrapper)} ref={hamburgerWrapper}>
                    {
                        console.log("ref:", hamburgerWrapper)
                    }
                    <div className="hamburger-icon">
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>
                <h1 className="title">Menu</h1>
            </header>
            <p>Here is a paragraph with some words. Here is a paragraph with some words. Here is a paragraph with some words. Here is a paragraph with some words. Here is a paragraph with some words. Here is a paragraph with some words.</p>
        </div>
    )
}

export default memo(Main)