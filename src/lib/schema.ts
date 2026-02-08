export function getLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['LegalService', 'LocalBusiness'],
        name: 'Holman & Pitts Law Office, LLC',
        description: 'Divorce, criminal defense & estate planning attorneys serving Tamaqua, Pottsville, Frackville & Lehighton in Schuylkill & Carbon Counties.',
        url: 'https://holmanpittslaw.com',
        telephone: '+1-570-668-5321',
        email: 'office@holmanpitts.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '204 E Broad St',
            addressLocality: 'Tamaqua',
            addressRegion: 'PA',
            postalCode: '18252',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.7975,
            longitude: -75.9686,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        areaServed: [
            { '@type': 'City', name: 'Tamaqua', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
            { '@type': 'City', name: 'Pottsville', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
            { '@type': 'City', name: 'Frackville', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
            { '@type': 'City', name: 'Lehighton', containedInPlace: { '@type': 'State', name: 'Pennsylvania' } },
        ],
        priceRange: '$$',
        image: 'https://holmanpittslaw.com/images/image7.webp',
        sameAs: [
            'https://www.facebook.com/HolmanPittsLaw',
        ],
    };
}

export function getAttorneySchemas() {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Attorney',
            name: 'Christine A. Holman',
            jobTitle: 'Founding Partner, Former District Attorney',
            description: 'With over 20 years of experience, Attorney Holman served as the first elected female District Attorney of Schuylkill County. She offers a unique inside-out perspective on the legal system.',
            worksFor: {
                '@type': 'LegalService',
                name: 'Holman & Pitts Law Office, LLC',
            },
            address: {
                '@type': 'PostalAddress',
                streetAddress: '204 E Broad St',
                addressLocality: 'Tamaqua',
                addressRegion: 'PA',
                postalCode: '18252',
            },
            telephone: '+1-570-668-5321',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Attorney',
            name: 'Jacqueline M. Pitts',
            jobTitle: 'Associate Attorney, Part-Time Public Defender',
            description: 'A graduate of Widener University Commonwealth Law School, Attorney Pitts brings a vigorous, client-centered approach to family law, real estate, and criminal defense.',
            worksFor: {
                '@type': 'LegalService',
                name: 'Holman & Pitts Law Office, LLC',
            },
            address: {
                '@type': 'PostalAddress',
                streetAddress: '204 E Broad St',
                addressLocality: 'Tamaqua',
                addressRegion: 'PA',
                postalCode: '18252',
            },
            telephone: '+1-570-668-5321',
        },
    ];
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://holmanpittslaw.com${item.url}`,
        })),
    };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
