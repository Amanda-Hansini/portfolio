import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "NeuraWeb – AI Landing Design",
        description: "A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, featuring glowing neon visuals and immersive UI.",
        tags: ["Figma", "UI/UX", "Neon Design"],
        imagePlaceholder: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        accent: "var(--neon-purple)"
    },
    {
        title: "Apple Vision Pro Concept",
        description: "A futuristic HR software concept designed for Apple Vision Pro, built to reimagine attendance, leave tracking, and employee experience in an immersive interface.",
        tags: ["VisionOS", "Figma", "Concept"],
        imagePlaceholder: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        accent: "var(--neon-blue)"
    },
    {
        title: "WebHR Kiosk",
        description: "A time clock kiosk that allows employees to clock in and out seamlessly. A simple and easy-to-use app for workplace attendance.",
        tags: ["React", "HR Tech", "Enterprise"],
        imagePlaceholder: "linear-gradient(135deg, #111 0%, #222 100%)",
        accent: "#3b82f6"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title animate-fade-in">Featured Projects</h2>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-panel project-card animate-fade-in"
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${project.accent}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-glass)';
                            }}
                        >
                            <div
                                className="project-image-placeholder"
                                style={{
                                    height: '200px',
                                    background: project.imagePlaceholder,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '4rem', fontWeight: 'bold' }}>{project.title.substring(0, 2)}</span>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '12px',
                                            color: 'var(--neon-blue)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                                        <Github size={16} /> Code
                                    </a>
                                    <a href="#" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
