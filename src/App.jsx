import React, { memo, useState, useEffect } from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Events from './components/Events'

const App = () => {
  const [closed, setClosed] = useState(true)

  const handleScroll = () => {
    setClosed(true)
  }

  useEffect(() => window.addEventListener('scroll', handleScroll))

  const handleClick = (e, ref) => {
    e.stopPropagation()
    ref.current.className === 'hamburger-wrapper' ?
    setClosed(false) : setClosed(true)
  }

  return (
    <>
      <Sidebar closed={closed}  handleClick={handleClick}/>
      <div className="home-container">
        <Main closed={closed} handleClick={handleClick}/>
      </div>
      <Events />
    </>
  );
}

export default memo(App)
