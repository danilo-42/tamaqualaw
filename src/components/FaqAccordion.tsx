'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

interface FaqItem {
    question: string;
    answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.faqSection}>
            <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <svg
                                className={styles.faqIcon}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            </svg>
                        </button>
                        <div className={styles.faqAnswer}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
