import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Warehouse Management System',
            description: 'A web application for managing warehouse operations, including inventory tracking.',
            link: 'https://warehousestore-1.onrender.com',
        },
        {
            title: 'Recipe Book',
            description: 'A simple frontend project to display recipes using React.js and API.',
            link: 'https://manasthor.github.io/RecipeBook/',
        },
        {
            title: 'Weather App',
            description: 'A simple frontend project that provides current weather information globally using React.js and API.',
            link: 'https://weatherapp-banm.onrender.com',
        },
    ];

    return (
        <section id="projects" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Projects</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px', width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;