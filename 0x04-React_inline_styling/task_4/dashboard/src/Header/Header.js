import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create ({
  header: {
    width: '20px',
  },
})

export default Header;
