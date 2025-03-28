import React from 'react';

function Education() {
  return (
    <section id="education" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem', color: '#333' }}>Education</h2>
      
      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>Chandigarh University, Chandigarh</h3>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#555' }}>M.C.A., Computer Applications (2022 - 2024)</p>
      </div>

      <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>Sharda University, Greater Noida</h3>
        <p style={{ margin: 0, fontSize: '1.1rem', color: '#555' }}>B.C.A., Computer Applications (2019 - 2022)</p>
      </div>
    </section>
  );
}

export default Education;