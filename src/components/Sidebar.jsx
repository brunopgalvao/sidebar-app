import React, { memo } from 'react'
import './Sidebar.css'

const Sidebar = ({ closed, handleClick }) => {
    let xMark = React.createRef()
    return (
        <div className={closed ? 'sidebar-container closed' : 'sidebar-container'}>
            <div className="x-mark" onClick={(e) => handleClick(e, xMark)} ref={xMark}>x</div>
            <div className="links-container">
                <div className="link">Home</div>
                <div className="link">Services</div>
                <div className="link">About</div>
                <div className="link">Contact</div>
            </div>
        </div>
    )
}

export default memo(Sidebar)