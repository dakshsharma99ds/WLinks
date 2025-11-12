import React from 'react';

const styles = {
    contactSection: {
         backgroundImage:
            "linear-gradient(rgba(28, 28, 28, 0.8), rgba(28, 28, 28, 0.8)), url('https://img.freepik.com/free-vector/black-background-with-wavy-lines_52683-76524.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1c1c1c', 
        color: '#f0f0f0', 
        padding: '20px 20px',
        minHeight: '90.20vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    contactTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#ff7e00', 
    },
   
    contactSubtitle: {
        fontSize: '1.2rem',
        marginBottom: '40px',
        color: '#a0a0a0',
    },

    formContainer: {
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#2a2a2a', 
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    },
   
    formGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
  
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '500',
        color: '#f0f0f0',
    },
  
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #555',
        borderRadius: '4px',
        backgroundColor: '#333',
        color: '#f0f0f0',
        fontSize: '1rem',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        border: '1px solid #555',
        borderRadius: '4px',
        backgroundColor: '#333',
        color: '#f0f0f0',
        fontSize: '1rem',
        resize: 'vertical',
        minHeight: '100px',
    },
   
    submitButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#ff7e00', 
        color: '#1c1c1c',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        
    },
};

const ContactSection = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo, no actual server interaction)');
    };

    return (
        <section style={styles.contactSection} id="contact">
            <h1 style={styles.contactTitle}>
                GET IN TOUCH
            </h1>
            <p style={styles.contactSubtitle}>
                Have a question, feedback, or need to report a dead link? Contact the WLinks team.
            </p>
            
            <div style={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="name">Your Name</label>
                        <input style={styles.input} type="text" id="name" required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="email">Your Email</label>
                        <input style={styles.input} type="email" id="email" required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="message">Message</label>
                        <textarea style={styles.textarea} id="message" required />
                    </div>
                    <button style={styles.submitButton} type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;