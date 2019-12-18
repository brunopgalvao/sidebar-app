import React, {memo} from 'react'
import './Cards.css'

import Card from './Card'

const Cards = () => {
    const CARDS = [...Array(18)].map((card, index) => (
        <Card/>
    ))

    return (
        <div className="cards-container">
            {CARDS}
        </div>
    )
}

export default memo(Cards)