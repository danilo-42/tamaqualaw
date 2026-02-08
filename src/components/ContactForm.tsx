'use client';

import { useState } from 'react';
import styles from '../app/contact/page.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        website: '', // honeypot field
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitMessage('Thank you for your message. We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '', website: '' });
            } else {
                setSubmitMessage(result.message || 'Something went wrong. Please try again later.');
            }
        } catch {
            setSubmitMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2 className={styles.formTitle}>Talk to an Attorney Today</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Honeypot - hidden from real users */}
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email*"
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your legal needs..."
                        className={styles.textarea}
                        rows={5}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Request Your Case Evaluation'}
                </button>

                {submitMessage && (
                    <p className={styles.successMessage}>{submitMessage}</p>
                )}
            </form>
        </>
    );
}
