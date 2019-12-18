import React, {memo} from 'react'
import './Card.css'

import island1 from '../images/island1.jpg'

const Card = () => {
    return (
        <article className="card">
            <img src={island1} alt="island" />
            <div className="text">
                <h3>Lorem Ipsum Dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet mauris. Lectus arcu
                bibendum at varius vel pharetra vel turpis.</p>
            </div>
        </article>
    )
}

export default memo(Card)