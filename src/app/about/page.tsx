import Image from 'next/image';
import { Metadata } from 'next';
import AttorneyCard from '@/components/AttorneyCard';
import JsonLd from '@/components/JsonLd';
import { getAttorneySchemas, getBreadcrumbSchema } from '@/lib/schema';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About Our Attorneys',
    description: 'Meet former District Attorney Christine Holman and Public Defender Jacqueline Pitts. Mother-daughter attorneys serving Tamaqua, Pottsville, Frackville & Schuylkill County.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Our Attorneys | Holman & Pitts Law',
        description: 'Meet former District Attorney Christine Holman and Public Defender Jacqueline Pitts.',
    },
};

const attorneys = [
    {
        id: 'christine-holman',
        name: 'Christine A. Holman, Esq.',
        role: 'Founding Partner',
        anchor: 'Former District Attorney',
        authorityText: 'With over 20 years of experience, Attorney Holman offers a unique inside-out perspective on the legal system, having served as the county\'s lead prosecutor.',
        shortBio: `Christine A. Holman, Esquire has been practicing law in Schuylkill County for over two decades. She originally opened her solo law office in Frackville in 2000, following years of experience both in the courtroom and behind the scenes.`,
        fullBio: `Christine A. Holman, Esquire has been practicing law in Schuylkill County for over two decades. She originally opened her solo law office in Frackville in 2000, following years of experience both in the courtroom and behind the scenes. A graduate of the Thomas M. Cooley Law School, Attorney Holman began her legal career as a judicial law clerk, first for the Honorable Cyrus Palmer Dolbin, and later for the Honorable John E. Domalakes, before joining the law firm of Rubright, Domalakes, Troy & Miller.

In 2001, she expanded her service to the public sector by becoming an Assistant District Attorney in the Juvenile Division, ultimately serving as the first elected female District Attorney of Schuylkill County from 2014 to 2017. After concluding her term, she reestablished her private practice in Tamaqua in 2018, laying the foundation for what would later become Holman and Pitts Law, LLC.

In addition to her legal work, Attorney Holman served as a part-time paralegal instructor at McCann School of Business for 15 years, sharing her knowledge with future legal professionals. She is also a past president of the Frackville Lions Club and remains actively involved in local civic life.

In 2022, Attorney Holman welcomed her daughter, Jacqueline M. Pitts, Esq., as an associate attorney. Together, they formed Holman and Pitts Law, LLC, a family-owned law firm dedicated to serving the legal needs of the Schuylkill County community.`,
    },
    {
        id: 'jacqueline-pitts',
        name: 'Jacqueline M. Pitts, Esq.',
        role: 'Associate Attorney',
        anchor: 'Public Defender Perspective',
        authorityText: 'Attorney Pitts brings a vigorous, client-centered approach, ensuring every individual receives a sophisticated and aggressive defense.',
        shortBio: `Jacqueline M. Pitts, Esquire graduated from Widener University Commonwealth Law School in 2022 and became a licensed attorney that same year. She officially joined her mother's practice as an associate attorney.`,
        fullBio: `Jacqueline M. Pitts, Esquire graduated from Widener University Commonwealth Law School in 2022 and became a licensed attorney that same year. She officially joined her mother's practice as an associate attorney, and together they launched Holman and Pitts Law, LLC, continuing a family tradition of legal service in Schuylkill County.

Although her official role began in 2022, Jacqueline had worked alongside her mother for many years prior, gaining valuable experience and insight into the legal field. Her work is grounded in a client-first philosophy, with a focus on persistent, effective representation.

In 2023, she also accepted a part-time position as a Public Defender for Schuylkill County, representing individuals in criminal proceedings with diligence and empathy.

At Holman and Pitts Law, LLC, Jacqueline concentrates her practice on family law, real estate, and criminal defense. A lifelong resident of Schuylkill County, she is proud to serve the community where she was born and raised.

Both Christine and Jacqueline are proud active members of the Tamaqua Business and Professional Women's Club and are committed to providing knowledgeable, compassionate legal representation to individuals and families across the region.`,
    },
];

export default function AboutPage() {
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
    ]);

    return (
        <div className={styles.page}>
            <JsonLd data={[...getAttorneySchemas(), breadcrumbSchema]} />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>About Us</h1>
                    <p className={styles.heroSubtitle}>
                        A family tradition of dedicated legal service in Schuylkill County
                    </p>
                </div>
            </section>

            {/* Team Photo Section */}
            <section className={styles.teamPhotoSection}>
                <div className={styles.container}>
                    <div className={styles.photoCard}>
                        <div className={styles.photoWrapper}>
                            <Image
                                src="/images/image7.webp"
                                alt="Tamaqua attorneys Christine A. Holman and Jacqueline M. Pitts - Holman & Pitts Law, Schuylkill County"
                                width={400}
                                height={500}
                                className={styles.teamPhoto}
                                priority
                            />
                        </div>
                        <div className={styles.photoCaption}>
                            <p>Christine A. Holman, Esq. & Jacqueline M. Pitts, Esq.</p>
                            <span>Mother-Daughter Legal Team</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Attorney Profiles */}
            <section id="team" className={styles.profilesSection}>
                <div className={styles.container}>
                    <div className={styles.profilesGrid}>
                        {attorneys.map((attorney, index) => (
                            <AttorneyCard key={attorney.id} attorney={attorney} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Authority Badges */}
            <section className={styles.badgesSection}>
                <div className={styles.container}>
                    <h2 className={styles.badgesTitle}>Recognitions &amp; Credentials</h2>
                    <div className={styles.badgesGrid}>
                        <div className={styles.badgeCard}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                </svg>
                            </div>
                            <h3>First Elected Female DA</h3>
                            <p>Schuylkill County, 2014&ndash;2017</p>
                        </div>
                        <div className={styles.badgeCard}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                                </svg>
                            </div>
                            <h3>20+ Years of Practice</h3>
                            <p>Schuylkill &amp; Carbon Counties</p>
                        </div>
                        <div className={styles.badgeCard}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>PA Bar Admitted</h3>
                            <p>Active members in good standing</p>
                        </div>
                        <div className={styles.badgeCard}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3>Community Leaders</h3>
                            <p>Tamaqua BPW &amp; Frackville Lions Club</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Outcomes */}
            <section className={styles.outcomesSection}>
                <div className={styles.container}>
                    <h2 className={styles.outcomesTitle}>Representative Results</h2>
                    <p className={styles.outcomesDisclaimer}>
                        Every case is unique. Past results do not guarantee a similar outcome.
                        These examples illustrate the types of matters we handle.
                    </p>
                    <div className={styles.outcomesGrid}>
                        <div className={styles.outcomeCard}>
                            <span className={styles.outcomeLabel}>Family Law</span>
                            <h3>Custody Modified</h3>
                            <p>Secured primary custody for a parent in a contested modification proceeding in Schuylkill County.</p>
                        </div>
                        <div className={styles.outcomeCard}>
                            <span className={styles.outcomeLabel}>Criminal Defense</span>
                            <h3>Charges Reduced</h3>
                            <p>Negotiated felony charges down to a misdemeanor with no jail time for a first-time offender.</p>
                        </div>
                        <div className={styles.outcomeCard}>
                            <span className={styles.outcomeLabel}>Estate Planning</span>
                            <h3>Estate Administered</h3>
                            <p>Successfully guided a family through complex probate proceedings involving multi-county assets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mother-Daughter Narrative / Our Story */}
            <section id="story" className={styles.narrativeSection}>
                <div className={styles.container}>
                    <div className={styles.narrativeContent}>
                        <h2 className={styles.narrativeTitle}>A Family Firm, Serving Families</h2>
                        <p className={styles.narrativeText}>
                            As a mother-daughter firm, we understand that legal issues are not just
                            cases&mdash;they are family matters. We combine the wisdom of experience
                            with modern legal strategy to serve our neighbors in Tamaqua and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.valuesTitle}>Our Commitment</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Dedicated Advocacy</h3>
                            <p>Fighting for your rights with experience and determination</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h3>Compassionate Service</h3>
                            <p>Understanding your needs with empathy and care</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <h3>Family Tradition</h3>
                            <p>Serving our community with a personal touch</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
