import React, { memo } from 'react'
import './Sidebar.css'

const Sidebar = ({ closed }) => <div className={closed ? 'sidebar-container closed' : 'sidebar-container'}>Sidebar</div>

export default memo(Sidebar)