import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { locations, locationPracticeVariants, getAllLocationPracticeParams } from '@/data/locations';
import styles from './page.module.css';

export function generateStaticParams() {
    return getAllLocationPracticeParams();
}

export function generateMetadata({ params }: { params: { town: string; practice: string } }): Metadata {
    const variant = locationPracticeVariants[params.town]?.[params.practice];
    if (!variant) return {};

    return {
        title: variant.metaTitle,
        description: variant.metaDescription,
        alternates: {
            canonical: `/locations/${params.town}/${params.practice}`,
        },
        openGraph: {
            title: variant.metaTitle,
            description: variant.metaDescription,
        },
    };
}

export default function LocationPracticePage({ params }: { params: { town: string; practice: string } }) {
    const location = locations[params.town];
    const variant = locationPracticeVariants[params.town]?.[params.practice];

    if (!location || !variant) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: location.town, href: `/locations/${params.town}` },
        { label: variant.title },
    ];

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: location.town, url: `/locations/${params.town}` },
        { name: variant.title, url: `/locations/${params.town}/${params.practice}` },
    ]);

    return (
        <div className={styles.page}>
            <JsonLd data={[breadcrumbSchema]} />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{variant.title}</h1>
                    <p className={styles.heroSubtitle}>
                        Holman &amp; Pitts Law serves {location.town} and {location.county} County, PA.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <h2>{variant.title}</h2>
                            <p>{variant.content}</p>

                            <h3>Local Court Experience</h3>
                            <p>{location.courtReference}</p>

                            <div className={styles.practiceLink}>
                                <Link href={variant.practiceLink} className={styles.practiceLinkButton}>
                                    {variant.practiceLabel}
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                    </svg>
                                </Link>
                            </div>

                            <div className={styles.nearbySection}>
                                <h3>Nearby Areas We Serve</h3>
                                <div className={styles.nearbyLinks}>
                                    {location.nearbyAreas.map((area) => (
                                        <Link
                                            key={area.slug}
                                            href={`/locations/${area.slug}`}
                                            className={styles.nearbyLink}
                                        >
                                            {area.name}
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.ctaCard}>
                                <h3>Talk to an Attorney Today</h3>
                                <p>
                                    Serving {location.town} and all of {location.county} County.
                                    Contact us for a consultation.
                                </p>
                                <Link href="/contact" className={styles.ctaButton}>
                                    Request Your Case Evaluation
                                </Link>
                                <Link href="tel:570-668-5321" className={styles.ctaPhone}>
                                    Or call: 570-668-5321
                                </Link>
                            </div>

                            <div className={styles.backToLocation}>
                                <Link href={`/locations/${params.town}`} className={styles.backLink}>
                                    &larr; All {location.town} Legal Services
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
