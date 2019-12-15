import React, { memo, useState, useEffect } from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Events from './components/Events'

const App = () => {
  const [closed, setClosed] = useState('closed')

  useEffect(() => {
    const hamburgerIcon = document.querySelector('.hamburger-icon')
    hamburgerIcon.addEventListener('click', () => {
      setClosed(closed === 'closed' ? '' : 'closed')
    })
  })
  return (
    <>
      <div className="home-container">
        <Sidebar closed={closed} />
        <Main closed={closed} />
      </div>
      <Events />
    </>
  );
}

export default memo(App)
