import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="section hero-section">
            <div className="glow-blob" style={{ top: '10%', left: '-10%' }}></div>
            <div className="glow-blob" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, var(--neon-purple) 0%, transparent 70%)', opacity: 0.3 }}></div>

            <div className="container flex-center" style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
                <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span className="badge glass-panel" style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                            Welcome to my space
                        </span>
                    </div>

                    <h1 className="hero-title animate-fade-in" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', animationDelay: '0.2s', lineHeight: '1.1' }}>
                        Hello! I Am <br />
                        <span className="text-gradient">Amanda Hansini</span>
                    </h1>

                    <h2 className="hero-subtitle animate-fade-in text-gradient-accent" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1.5rem', animationDelay: '0.3s' }}>
                        A Designer who judges a book by its cover...
                    </h2>

                    <p className="hero-description animate-fade-in" style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '3rem', animationDelay: '0.4s', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Because if the cover does not impress you what else can? <br />
                        Currently, I'm a Software Engineer. A self-taught UI/UX designer, making meaningful and delightful digital products.
                    </p>

                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Let's Connect</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
