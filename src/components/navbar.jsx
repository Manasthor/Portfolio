import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>My Portfolio</div>
      <div>
        <a href="#about" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#skills" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Skills</a>
        <a href="#projects" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Projects</a>
        <a href="#education" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Education</a>
        <a href="#contact" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;