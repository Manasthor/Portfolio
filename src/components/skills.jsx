import React from 'react';

function Skills() {
  const skillsData = [
    { category: 'Frontend', skills: 'HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS' },
    { category: 'Backend', skills: 'Node.js, Express.js, MongoDB' },
    { category: 'Version Control & Tools', skills: 'Git, GitHub, Postman, REST APIs' },
    { category: 'Other', skills: 'Problem Solving, Communication, SQL, Python' }
  ];

  return (
    <section id="skills" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem', color: '#333' }}>Skills</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',  // Default to 2x2
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        {skillsData.map((item, index) => (
          <div key={index} style={{
            background: '#f4f4f4',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            minHeight: '140px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#222' }}>{item.category}</h3>
            <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center' }}>{item.skills}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 600px) {
            #skills div {
              display: grid;
              grid-template-columns: 1fr;
              gap: 10px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Skills;
