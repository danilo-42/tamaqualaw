import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerInfo}>
                    <p className={styles.firmName}>Holman & Pitts Law Office, LLC</p>
                    <p className={styles.nap}>
                        204 E Broad St, Tamaqua, PA 18252 |{' '}
                        <Link href="tel:570-668-5321">570-668-5321</Link> |{' '}
                        <Link href="mailto:office@holmanpitts.com">office@holmanpitts.com</Link>
                    </p>
                    <p className={styles.serviceArea}>
                        Serving Tamaqua, Pottsville, Frackville, Lehighton, and all of Schuylkill & Carbon Counties.
                    </p>
                </div>
                <p className={styles.copyright}>
                    Copyright &copy; {currentYear}{' '}
                    <Link href="/" className={styles.link}>
                        Holman & Pitts Law Office, LLC
                    </Link>{' '}
                    - All Rights Reserved.
                </p>
                <div className={styles.legalLinks}>
                    <Link href="/privacy-policy" className={styles.legalLink}>
                        Privacy Policy
                    </Link>
                    <span className={styles.separator}>|</span>
                    <Link href="/terms-of-service" className={styles.legalLink}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
