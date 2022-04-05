import React from 'react';
import './Body.css';
import Messages from './Messages';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div className='body'>
        <Sidebar />
        <Messages />
    </div>
  )
}

export default Body