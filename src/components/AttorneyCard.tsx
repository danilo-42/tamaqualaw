'use client';

import { useState } from 'react';
import styles from '../app/about/page.module.css';

interface Attorney {
    id: string;
    name: string;
    role: string;
    anchor: string;
    authorityText: string;
    shortBio: string;
    fullBio: string;
}

export default function AttorneyCard({ attorney, index }: { attorney: Attorney; index: number }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article
            className={`${styles.profileCard} ${index === 0 ? styles.cardLeft : styles.cardRight}`}
        >
            <div className={styles.profileHeader}>
                <div className={styles.profileIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <div className={styles.profileTitles}>
                    <h2 className={styles.profileName}>{attorney.name}</h2>
                    <span className={styles.profileRole}>{attorney.role}</span>
                    <strong className={styles.profileAnchor}>{attorney.anchor}</strong>
                </div>
            </div>

            <div className={styles.profileDivider}></div>

            <div className={styles.authorityText}>
                <p>{attorney.authorityText}</p>
            </div>

            <div className={styles.profileBio}>
                <p>{expanded ? attorney.fullBio : attorney.shortBio}</p>
            </div>

            <button
                className={styles.toggleButton}
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? (
                    <>
                        <span>Show Less</span>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                        </svg>
                    </>
                ) : (
                    <>
                        <span>Read Full Bio</span>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                        </svg>
                    </>
                )}
            </button>
        </article>
    );
}
