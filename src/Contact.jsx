import React from 'react';

const styles = {
    contactSection: {
        minHeight: '90vh',
        padding: '20px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contactTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '0px',
        color: '#ff7e00',
        marginTop: '10px'
    },
    contactSubtitle: { 
        fontSize: '1.2rem', 
        marginBottom: '20px', 
        color: '#a0a0a0' 
    },
    formContainer: {
        width: '100%', 
        maxWidth: '500px', 
        background: 'rgba(34, 34, 34, 0.9)',
        padding: '40px', 
        borderRadius: '15px', 
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    },
    formGroup: { 
        marginBottom: '20px', 
        textAlign: 'left' 
    },
    input: {
        width: '100%', 
        padding: '12px', 
        borderRadius: '8px', 
        border: '1px solid #444',
        backgroundColor: '#2a2a2a', 
        color: '#fff', 
        transition: 'border-color 0.3s, box-shadow 0.3s',
        outline: 'none'
    },
    submitButton: {
        width: '100%',
        padding: '14px',
        backgroundColor: '#ff7e00',
        fontSize: '18px', 
        color: 'Black',
        border: 'none', 
        borderRadius: '8px', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)', 
        transition: 'all 0.3s ease'
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
                        <label style={{color: '#a0a0a0'}}>Your Name</label>
                        <input style={styles.input} onFocus={handleFocus} onBlur={handleBlur} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={{color: '#a0a0a0'}}>Your Email</label>
                        <input type="email" style={styles.input} onFocus={handleFocus} onBlur={handleBlur} required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={{color: '#a0a0a0'}}>Message</label>
                        <textarea style={{...styles.input, minHeight: '120px'}} onFocus={handleFocus} onBlur={handleBlur} required />
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
