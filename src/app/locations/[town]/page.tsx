import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { locations, locationPracticeVariants, getAllLocationParams } from '@/data/locations';
import styles from './page.module.css';

export function generateStaticParams() {
    return getAllLocationParams();
}

export function generateMetadata({ params }: { params: { town: string } }): Metadata {
    const location = locations[params.town];
    if (!location) return {};

    return {
        title: location.metaTitle,
        description: location.metaDescription,
        alternates: {
            canonical: `/locations/${params.town}`,
        },
        openGraph: {
            title: location.metaTitle,
            description: location.metaDescription,
        },
    };
}

export default function LocationPage({ params }: { params: { town: string } }) {
    const location = locations[params.town];
    if (!location) {
        notFound();
    }

    const variants = locationPracticeVariants[params.town] || {};

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Locations' },
        { label: location.town },
    ];

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: location.town, url: `/locations/${params.town}` },
    ]);

    return (
        <div className={styles.page}>
            <JsonLd data={[breadcrumbSchema]} />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{location.heroHeadline}</h1>
                    <p className={styles.heroSubtitle}>
                        Divorce, criminal defense &amp; estate planning attorneys serving {location.town} and {location.county} County, PA.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <h2>Attorneys Serving {location.town}, Pennsylvania</h2>
                            <p>{location.localCopy}</p>

                            <h3>Local Court Experience</h3>
                            <p>{location.courtReference}</p>

                            <h3>Our Commitment to {location.town}</h3>
                            <p>{location.communityContext}</p>

                            <h3>Practice Areas</h3>
                            <p>
                                Our {location.town} clients receive the full range of legal services offered by Holman &amp; Pitts Law,
                                including family law, criminal defense, and estate planning. We handle matters in
                                the {location.county} County court system and beyond.
                            </p>
                            <ul>
                                <li><Link href="/practice-areas/family-law">Family Law</Link> &mdash; Divorce, custody, adoption, support, grandparents&apos; rights</li>
                                <li><Link href="/practice-areas/criminal-defense">Criminal Defense</Link> &mdash; DUI, drug charges, juvenile offenses</li>
                                <li><Link href="/practice-areas/estate-planning">Estate Planning</Link> &mdash; Wills, trusts, power of attorney, probate</li>
                            </ul>

                            {Object.keys(variants).length > 0 && (
                                <div className={styles.variantsSection}>
                                    <h3>{location.town} Legal Services</h3>
                                    <div className={styles.variantsGrid}>
                                        {Object.values(variants).map((variant) => (
                                            <Link
                                                key={variant.practiceSlug}
                                                href={`/locations/${params.town}/${variant.practiceSlug}`}
                                                className={styles.variantCard}
                                            >
                                                <span className={styles.variantTitle}>{variant.title}</span>
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

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

                            <div className={styles.officeInfo}>
                                <h4>Our Office</h4>
                                <p>204 E Broad Street<br />Tamaqua, PA 18252</p>
                                <p>
                                    <Link href="tel:570-668-5321">570-668-5321</Link>
                                </p>
                                <p>
                                    <Link href="mailto:office@holmanpitts.com">office@holmanpitts.com</Link>
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
