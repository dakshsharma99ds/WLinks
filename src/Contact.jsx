import React from 'react';

const styles = {
    contactSection: {
        minHeight: '85vh',
        padding: '10px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contactTitle: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
        marginBottom: '3px',
        color: '#ff7e00',
    },
    contactSubtitle: { 
        fontSize: '1rem',
        marginTop: '0px',
        marginBottom: '25px', 
        color: '#a0a0a0' 
    },
    formContainer: {
        width: '100%', 
        maxWidth: '420px',
        background: 'rgba(34, 34, 34, 0.7)', 
        padding: '25px 30px', 
        borderRadius: '15px', 
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 126, 0, 0.2)'
    },
    formGroup: { 
        marginBottom: '15px',
        textAlign: 'left' 
    },
    input: {
        width: '100%', 
        padding: '10px',
        borderRadius: '8px', 
        border: '1px solid #444',
        backgroundColor: 'rgba(42, 42, 42, 0.8)', 
        color: '#fff', 
        transition: 'border-color 0.3s, box-shadow 0.3s',
        outline: 'none',
        fontSize: '0.9rem'
    },
    submitButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#ff7e00',
        fontSize: '16px',
        color: 'white',
        border: 'none', 
        borderRadius: '8px', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        textShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)', 
        transition: 'all 0.3s ease',
        marginTop: '10px'
    },
};

const ContactSection = () => {
    const handleFocus = (e) => {
        e.target.style.borderColor = '#ff7e00';
        e.target.style.boxShadow = '0 0 8px rgba(255, 126, 0, 0.3)';
    };
    const handleBlur = (e) => {
        e.target.style.borderColor = '#444';
        e.target.style.boxShadow = 'none';
    };

    return (
        <section style={styles.contactSection} id="contact">
            <h1 style={styles.contactTitle}>GET IN TOUCH</h1>
            <p style={styles.contactSubtitle}>Have a question? Contact WLinks.</p>
            <div style={styles.formContainer}>
                <form onSubmit={e => { e.preventDefault(); alert('Sent!'); }}>
                    <div style={styles.formGroup}>
                        <label style={{color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '5px', display: 'block'}}>Your Name</label>
                        <input style={styles.input} onFocus={handleFocus} onBlur={handleBlur} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={{color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '5px', display: 'block'}}>Your Email</label>
                        <input type="email" style={styles.input} onFocus={handleFocus} onBlur={handleBlur} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={{color: '#a0a0a0', fontSize: '0.85rem', marginBottom: '5px', display: 'block'}}>Message</label>
                        <textarea style={{...styles.input, minHeight: '100px'}} onFocus={handleFocus} onBlur={handleBlur} required />
                    </div>
                    <button 
                        style={styles.submitButton}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = '#e67200'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = '#ff7e00'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
