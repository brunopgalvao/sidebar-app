import React, { memo } from 'react'
import './Events.css'

import Cards from './Cards'

const Events = () => <div className="events-container"><Cards/></div>

export default memo(Events)