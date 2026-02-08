import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import { practiceCategories, getAllSpokeParams } from '@/data/practice-areas';
import styles from './page.module.css';

export function generateStaticParams() {
    return getAllSpokeParams();
}

export function generateMetadata({ params }: { params: { slug: string; subcategory: string } }): Metadata {
    const category = practiceCategories[params.slug];
    const subPage = category?.subPages?.[params.subcategory];
    if (!subPage) return {};

    return {
        title: subPage.metaTitle,
        description: subPage.metaDescription,
        alternates: {
            canonical: `/practice-areas/${params.slug}/${params.subcategory}`,
        },
        openGraph: {
            title: subPage.metaTitle,
            description: subPage.metaDescription,
        },
    };
}

export default function SubcategoryPage({ params }: { params: { slug: string; subcategory: string } }) {
    const category = practiceCategories[params.slug];
    const subPage = category?.subPages?.[params.subcategory];

    if (!subPage) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: category.title, href: `/practice-areas/${params.slug}` },
        { label: subPage.title },
    ];

    const breadcrumbSchema = getBreadcrumbSchema(
        breadcrumbItems.filter(i => i.href).map(i => ({ name: i.label, url: i.href! })).concat([{ name: subPage.title, url: `/practice-areas/${params.slug}/${params.subcategory}` }])
    );

    const faqSchema = subPage.faqs.length > 0 ? getFaqSchema(subPage.faqs) : null;

    const otherSubPages = category.subPages
        ? Object.values(category.subPages).filter(sp => sp.slug !== params.subcategory)
        : [];

    return (
        <div className={styles.page}>
            <JsonLd data={faqSchema ? [breadcrumbSchema, faqSchema] : [breadcrumbSchema]} />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{subPage.title}</h1>
                    <p className={styles.heroSubtitle}>{subPage.heroDescription}</p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <Breadcrumb items={breadcrumbItems} />

                    <div className={styles.contentGrid}>
                        <div className={styles.mainContent}>
                            <h2>Overview</h2>
                            <p>{subPage.overview}</p>

                            <h3>Our {subPage.title} Services Include:</h3>
                            <ul>
                                {subPage.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>

                            <h3>Why Choose Holman & Pitts Law?</h3>
                            <p>{subPage.whyChooseUs}</p>

                            {subPage.faqs.length > 0 && (
                                <FaqAccordion faqs={subPage.faqs} />
                            )}

                            {otherSubPages.length > 0 && (
                                <div className={styles.relatedSection}>
                                    <h3>Related {category.title} Services</h3>
                                    <div className={styles.relatedLinks}>
                                        {otherSubPages.map((sp) => (
                                            <Link
                                                key={sp.slug}
                                                href={`/practice-areas/${params.slug}/${sp.slug}`}
                                                className={styles.relatedLink}
                                            >
                                                {sp.title}
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
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

                            <div className={styles.serviceAreas}>
                                <h4>Service Areas</h4>
                                <ul>
                                    <li><Link href="/locations/tamaqua">Tamaqua</Link></li>
                                    <li><Link href="/locations/pottsville">Pottsville</Link></li>
                                    <li><Link href="/locations/frackville">Frackville</Link></li>
                                    <li><Link href="/locations/lehighton">Lehighton</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
