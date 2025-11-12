import React from 'react';

const styles = {
    aboutSection: {
        backgroundImage:
            "linear-gradient(rgba(28, 28, 28, 0.8), rgba(28, 28, 28, 0.8)), url('https://img.freepik.com/free-vector/black-background-with-wavy-lines_52683-76524.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1c1c1c', 
        color: '#f0f0f0',
        padding: '2rem 2rem',
        minHeight: '90.20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutContainer: {
        maxWidth: '1100px',
        width: '100%',
        textAlign: 'center',
    },
    aboutTitle: {
        fontSize: '3.5rem',
        fontWeight: '900',
        marginBottom: '0.5rem',
        color: '#f0f0f0',
        textTransform: 'uppercase',
    },
    orangeText: {
        color: '#ff7e00',
    },
    aboutSubtitle: {
        fontSize: '1.5rem',
        fontWeight: '300',
        marginBottom: '4rem',
        color: '#a0a0a0',
    },
    manifestoPoints: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
    },
    pointCard: {
        backgroundColor: 'rgba(42, 42, 42, 0.9)',
        padding: '30px',
        borderRadius: '12px',
        borderTop: '5px solid #ff7e00',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s, background-color 0.3s',
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: '10px',
        display: 'block',
    },
    pointCardH3: {
        color: '#ff7e00',
        fontSize: '1.5rem',
        marginTop: '0',
    },
    pointCardP: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#cccccc',
    },
};

const AboutSection = () => {
    return (
        <section style={styles.aboutSection} id="about">
            <div style={styles.aboutContainer}>
                <h1 style={styles.aboutTitle}>
                    Our <span style={styles.orangeText}>Manifesto</span>
                </h1>
                <p style={styles.aboutSubtitle}>
                    Unlocking the best curated digital libraries—fast, free, and comprehensive.
                </p>

                <div style={styles.manifestoPoints}>
                    <div style={styles.pointCard}>
                        <span style={styles.icon}>⚡</span>
                        <h3 style={styles.pointCardH3}>Speed & Efficiency</h3>
                        <p style={styles.pointCardP}>
                            We believe in direct access. Our links are constantly vetted for the highest download speeds and minimal clutter. No more dead ends or endless redirects.
                        </p>
                    </div>
                    <div style={styles.pointCard}>
                        <span style={styles.icon}>📚</span>
                        <h3 style={styles.pointCardH3}>Comprehensive Curation</h3>
                        <p style={styles.pointCardP}>
                            From the latest releases to timeless classics across games, movies, and software—WLinks brings you sites that cover EVERYTHING worth having.
                        </p>
                    </div>
                    <div style={styles.pointCard}>
                        <span style={styles.icon}>🛡️</span>
                        <h3 style={styles.pointCardH3}>The Freedom of Choice</h3>
                        <p style={styles.pointCardP}>
                            In a world of paywalls and geographic restrictions, WLinks stands for the open flow of information and entertainment. We are your gateway to digital liberation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
