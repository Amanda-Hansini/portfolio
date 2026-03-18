import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section" style={{ minHeight: '60vh', paddingBottom: '0' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                <div className="glass-panel animate-fade-in" style={{
                    padding: '4rem 2rem',
                    width: '100%',
                    maxWidth: '800px',
                    borderRadius: '24px',
                    background: 'linear-gradient(180deg, rgba(25, 25, 25, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    { /* Decorative blur */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
                        filter: 'blur(60px)',
                        zIndex: 0,
                        opacity: 0.5
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }} className="text-gradient">
                            Let's build something <br />
                            <span className="text-gradient-accent">extraordinary</span> together.
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                            I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or have a project in mind? Let's connect.
                        </p>

                        <a href="mailto:hansiniamanda7@gmail.com" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem', borderRadius: '30px' }}>
                            <Mail size={20} />
                            hansiniamanda7@gmail.com
                        </a>
                    </div>
                </div>

                <footer style={{ marginTop: 'auto', padding: '3rem 0 2rem', width: '100%', borderTop: '1px solid var(--border-color)' }}>
                    <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>Twitter</a>
                            <a href="#" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>LinkedIn</a>
                            <a href="#" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
