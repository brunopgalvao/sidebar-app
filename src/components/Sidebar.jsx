import React, { memo } from 'react'
import './Sidebar.css'

const Sidebar = ({ closed }) => <div className={`sidebar-container ${closed}`}>Sidebar</div>

export default memo(Sidebar)