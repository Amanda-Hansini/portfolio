import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Software Engineer",
        company: "WebHR",
        period: "2020 - Present",
        description: "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
        link: "https://webhr.co"
    },
    {
        role: "UI/UX Designer",
        company: "Freelance",
        period: "2018 - 2020",
        description: "Designed meaningful and delightful digital products for various clients, creating an equilibrium between user needs and business goals."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title animate-fade-in">Work Experience</h2>

                <div className="experience-timeline" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass-panel experience-card animate-fade-in"
                            style={{
                                padding: '2rem',
                                animationDelay: `${index * 0.2}s`,
                                display: 'flex',
                                gap: '1.5rem',
                                flexDirection: 'column'
                            }}
                        >
                            <div className="experience-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Briefcase size={20} className="text-gradient-accent" />
                                        {exp.role}
                                    </h3>
                                    <p style={{ fontSize: '1.125rem', color: 'var(--neon-blue)', fontWeight: '500' }}>{exp.company}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.875rem', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                {exp.description}
                            </p>

                            {exp.link && (
                                <div style={{ marginTop: 'auto' }}>
                                    <a href={exp.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                        LEARN MORE &rarr;
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
