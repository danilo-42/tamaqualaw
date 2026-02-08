import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { practiceCategories } from '@/data/practice-areas';
import styles from './page.module.css';

export function generateStaticParams() {
    return Object.keys(practiceCategories).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const area = practiceCategories[params.slug];
    if (!area) return {};

    return {
        title: `${area.title} Attorney Tamaqua PA`,
        description: area.metaDescription,
        alternates: {
            canonical: `/practice-areas/${params.slug}`,
        },
        openGraph: {
            title: `${area.title} | Holman & Pitts Law`,
            description: area.metaDescription,
        },
    };
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
    const area = practiceCategories[params.slug];

    if (!area) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: area.title },
    ];

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Practice Areas', url: '/practice-areas' },
        { name: area.title, url: `/practice-areas/${params.slug}` },
    ]);

    const hasSubPages = area.subPages && Object.keys(area.subPages).length > 0;

    return (
        <div className={styles.page}>
            <JsonLd data={[breadcrumbSchema]} />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={area.image}
                        alt={`${area.title} attorney in Tamaqua, Schuylkill County PA`}
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="100vw"
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{area.title}</h1>
                    <p className={styles.heroSubtitle}>{area.heroDescription}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <h2>Overview</h2>
                            <p>{area.overview}</p>

                            <h3>Our {area.title} Services Include:</h3>
                            <ul>
                                {area.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>

                            {hasSubPages && (
                                <div className={styles.subPagesSection}>
                                    <h3>Explore Our {area.title} Services</h3>
                                    <div className={styles.subPagesGrid}>
                                        {Object.values(area.subPages!).map((subPage) => (
                                            <Link
                                                key={subPage.slug}
                                                href={`/practice-areas/${params.slug}/${subPage.slug}`}
                                                className={styles.subPageCard}
                                            >
                                                <span className={styles.subPageTitle}>{subPage.title}</span>
                                                <span className={styles.subPageDesc}>{subPage.heroDescription}</span>
                                                <span className={styles.subPageArrow}>Learn More &rarr;</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <h3>Why Choose Holman & Pitts Law?</h3>
                            <p>{area.whyChooseUs}</p>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.ctaCard}>
                                <h3>Ready to Discuss Your Case?</h3>
                                <p>
                                    Contact us today for a consultation. We&apos;re here to help
                                    you navigate your legal challenges.
                                </p>
                                <Link href="/contact" className={styles.ctaButton}>
                                    Talk to an Attorney Today
                                </Link>
                                <Link href="tel:570-668-5321" className={styles.ctaPhone}>
                                    Or call: 570-668-5321
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
