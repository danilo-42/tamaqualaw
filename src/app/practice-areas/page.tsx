import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Practice Areas',
    description: 'Family law, criminal defense, estate planning, civil litigation, real estate, and personal injury attorneys serving Tamaqua, Pottsville, Frackville & Lehighton in Schuylkill and Carbon Counties.',
    alternates: {
        canonical: '/practice-areas',
    },
};

const practiceAreas = [
    {
        id: 'family-law',
        title: 'Family Law',
        image: '/images/image1.webp',
        description: 'Navigating Divorce and Custody with Compassion. We prioritize the best interests of your children and the protection of your assets.',
    },
    {
        id: 'civil-litigation',
        title: 'Civil Litigation',
        image: '/images/image2.webp',
        description: 'Representing clients in civil disputes with strategic and effective advocacy.',
    },
    {
        id: 'criminal-defense',
        title: 'Criminal Defense',
        image: '/images/image3.webp',
        description: 'Your Freedom is Our Priority. Utilizing decades of prosecutorial and defense experience to protect your rights in Schuylkill County.',
    },
    {
        id: 'real-estate',
        title: 'Real Estate',
        image: '/images/image4.webp',
        description: 'Residential and commercial real estate transactions and legal matters.',
    },
    {
        id: 'personal-injury',
        title: 'Personal Injury',
        image: '/images/image5.webp',
        description: 'Fighting for fair compensation when you\'ve been injured due to negligence.',
    },
    {
        id: 'estate-planning',
        title: 'Estate Administration & Planning',
        image: '/images/image6.webp',
        description: 'Securing Your Legacy. Personalized Wills, Trusts, and Power of Attorney services for Tamaqua families.',
    },
];

export default function PracticeAreasPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Practice Areas</h1>
                    <p className={styles.description}>
                        Extensive legal experience with personalized service—dedicated to
                        protecting your rights and pursuing the best possible outcome in every case
                        across family law, criminal defense, civil litigation, personal injury, real estate,
                        and estate planning in Schuylkill and Carbon Counties.
                    </p>
                </div>
            </section>

            <section className={styles.areasSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our practice includes:</h2>
                    <div className={styles.areasGrid}>
                        {practiceAreas.map((area) => (
                            <Link key={area.id} href={`/practice-areas/${area.id}`} className={styles.areaCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.areaTitle}>{area.title}</h3>
                                    <p className={styles.areaDescription}>{area.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
