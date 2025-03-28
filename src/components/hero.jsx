import React from 'react';
import Pic from '../assets/Me.jpg'

function Hero() {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I'm Manas Rathore</h1>

        {/* Square Image */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src={Pic} 
            alt="Manas Rathore" 
            style={{ 
              width: '200px', 
              height: '200px', 
              objectFit: 'cover',  // Ensures image fills the square
              borderRadius: '8px', // Slightly rounded corners (remove if you want a perfect square)
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }} 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;