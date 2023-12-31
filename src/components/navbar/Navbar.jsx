import React from 'react';
import { RiMenu3Line, RiCliseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar