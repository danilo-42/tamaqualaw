'use client';

import Link from 'next/link';
import styles from './SafeExit.module.css';

export default function SafeExit() {
    return (
        <div className={styles.container}>
            <Link
                href="https://google.com"
                className={styles.button}
                target="_blank"
                rel="nofollow noreferrer"
            >
                Safe Exit
            </Link>
            <div className={styles.disclaimer}>
                <span className={styles.infoIcon}>i</span>
                <span className={styles.tooltip}>
                    Quickly leave this site. Your browsing history may still be visible.
                </span>
            </div>
        </div>
    );
}
