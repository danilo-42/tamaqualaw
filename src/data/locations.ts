export interface LocationPage {
    slug: string;
    town: string;
    county: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    localCopy: string;
    courtReference: string;
    communityContext: string;
    nearbyAreas: { name: string; slug: string }[];
}

export interface LocationPracticeVariant {
    practiceSlug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    content: string;
    practiceLink: string;
    practiceLabel: string;
}

export const locations: Record<string, LocationPage> = {
    'tamaqua': {
        slug: 'tamaqua',
        town: 'Tamaqua',
        county: 'Schuylkill',
        metaTitle: 'Tamaqua Attorneys | Holman & Pitts Law',
        metaDescription: 'Holman & Pitts Law is headquartered in Tamaqua, PA. Divorce, criminal defense & estate planning attorneys serving Schuylkill County. Call 570-668-5321.',
        heroHeadline: 'Your Tamaqua Attorneys',
        localCopy: 'Holman & Pitts Law is proud to call Tamaqua home. Located at 204 E Broad Street in the heart of downtown, our firm is deeply rooted in this community. Attorney Christine Holman reestablished her practice here in 2018 after serving as District Attorney, and together with her daughter Jacqueline, they serve the families and individuals of Tamaqua and the surrounding region.',
        courtReference: 'We regularly appear before the Schuylkill County Court of Common Pleas in Pottsville and handle matters at the Tamaqua Magisterial District Court. Our proximity to these courts means efficient handling of filings, hearings, and client meetings.',
        communityContext: 'As active members of the Tamaqua Business and Professional Women\'s Club, Christine and Jacqueline are invested in the growth and well-being of the Tamaqua community. When you hire our firm, you hire neighbors who care about the outcome of your case and the future of our town.',
        nearbyAreas: [
            { name: 'Pottsville', slug: 'pottsville' },
            { name: 'Frackville', slug: 'frackville' },
            { name: 'Lehighton', slug: 'lehighton' },
        ],
    },
    'pottsville': {
        slug: 'pottsville',
        town: 'Pottsville',
        county: 'Schuylkill',
        metaTitle: 'Pottsville Attorneys | Holman & Pitts Law',
        metaDescription: 'Attorneys serving Pottsville, PA. Family law, criminal defense & estate planning near the Schuylkill County Courthouse. Call 570-668-5321.',
        heroHeadline: 'Serving Pottsville & Schuylkill County',
        localCopy: 'As the county seat of Schuylkill County, Pottsville is home to the Schuylkill County Courthouse where many of our cases are heard. Holman & Pitts Law provides experienced legal representation to Pottsville residents in family law, criminal defense, and estate planning matters. Our Tamaqua office is a short drive from Pottsville, making it convenient for clients throughout the county.',
        courtReference: 'Attorney Christine Holman spent years working in the Schuylkill County Courthouse as both Assistant District Attorney and elected District Attorney. This intimate knowledge of the Pottsville court system — its judges, procedures, and expectations — gives our clients a distinct advantage.',
        communityContext: 'Pottsville is the hub of Schuylkill County\'s legal and government services. Whether your matter involves the Court of Common Pleas, Orphans\' Court for probate, or Family Court for custody proceedings, our team knows these halls and the people who work in them.',
        nearbyAreas: [
            { name: 'Tamaqua', slug: 'tamaqua' },
            { name: 'Frackville', slug: 'frackville' },
            { name: 'Lehighton', slug: 'lehighton' },
        ],
    },
    'frackville': {
        slug: 'frackville',
        town: 'Frackville',
        county: 'Schuylkill',
        metaTitle: 'Frackville Attorneys | Holman & Pitts Law',
        metaDescription: 'Attorneys serving Frackville, PA. Former DA Christine Holman\'s original office location. Family law, criminal defense & estate planning. Call 570-668-5321.',
        heroHeadline: 'Serving Frackville Families',
        localCopy: 'Frackville holds special significance for Holman & Pitts Law. Attorney Christine Holman opened her very first solo law practice in Frackville in 2000, establishing deep roots in this community. While our office has since moved to Tamaqua, we continue to actively serve Frackville residents and maintain the relationships we built over two decades of practice in this community.',
        courtReference: 'Frackville matters are typically handled at the Schuylkill County Courthouse in Pottsville, where Attorney Holman has extensive experience. For local magistrate matters, we also appear at the nearby Magisterial District Courts serving the Frackville area.',
        communityContext: 'Attorney Holman served as past president of the Frackville Lions Club, demonstrating her long-standing commitment to this community. When Frackville families need legal help, they turn to an attorney who has been their neighbor and advocate for over two decades.',
        nearbyAreas: [
            { name: 'Tamaqua', slug: 'tamaqua' },
            { name: 'Pottsville', slug: 'pottsville' },
            { name: 'Lehighton', slug: 'lehighton' },
        ],
    },
    'lehighton': {
        slug: 'lehighton',
        town: 'Lehighton',
        county: 'Carbon',
        metaTitle: 'Lehighton Attorneys | Holman & Pitts Law',
        metaDescription: 'Attorneys serving Lehighton and Carbon County, PA. Divorce, criminal defense & estate planning. Convenient from Tamaqua. Call 570-668-5321.',
        heroHeadline: 'Serving Lehighton & Carbon County',
        localCopy: 'Holman & Pitts Law extends its practice into Carbon County, serving the residents of Lehighton and surrounding communities. Located just a short drive from our Tamaqua office, Lehighton clients benefit from our dual-county expertise. We handle family law, criminal defense, and estate planning matters in both the Carbon County and Schuylkill County court systems.',
        courtReference: 'For Lehighton clients, matters are heard at the Carbon County Courthouse in Jim Thorpe. Our attorneys are admitted to practice in Carbon County and appear regularly before its courts. We handle the jurisdictional nuances so you can focus on your case.',
        communityContext: 'Lehighton and the greater Carbon County area share deep ties with Schuylkill County. Many families in the region live and work across county lines. Our firm understands these connections and provides seamless representation regardless of which county jurisdiction your case falls under.',
        nearbyAreas: [
            { name: 'Tamaqua', slug: 'tamaqua' },
            { name: 'Pottsville', slug: 'pottsville' },
            { name: 'Frackville', slug: 'frackville' },
        ],
    },
};

export const locationPracticeVariants: Record<string, Record<string, LocationPracticeVariant>> = {
    'tamaqua': {
        'divorce-lawyer': {
            practiceSlug: 'divorce-lawyer',
            title: 'Divorce Lawyer in Tamaqua',
            metaTitle: 'Divorce Lawyer Tamaqua PA | Holman & Pitts Law',
            metaDescription: 'Looking for a divorce lawyer in Tamaqua? Holman & Pitts Law provides compassionate divorce representation for Schuylkill County families. Call 570-668-5321.',
            content: 'If you are going through a divorce in Tamaqua, Holman & Pitts Law is here to help. Our office at 204 E Broad Street is conveniently located in the heart of town. We handle contested and uncontested divorces, equitable distribution, alimony, and related custody matters. As your local divorce attorneys, we understand the community you live in and the courts that will hear your case.',
            practiceLink: '/practice-areas/family-law/divorce',
            practiceLabel: 'Learn more about our Divorce services',
        },
    },
    'pottsville': {
        'criminal-defense': {
            practiceSlug: 'criminal-defense',
            title: 'Criminal Defense in Pottsville',
            metaTitle: 'Criminal Defense Attorney Pottsville PA | Holman & Pitts Law',
            metaDescription: 'Experienced criminal defense attorneys near the Schuylkill County Courthouse in Pottsville. Former DA Christine Holman defends your rights. Call 570-668-5321.',
            content: 'Facing criminal charges in Pottsville? Attorney Christine Holman formerly served as District Attorney in the very courthouse where your case will be heard. This gives our defense team unparalleled insight into how the prosecution operates in Schuylkill County. From DUI to drug charges to juvenile offenses, we provide aggressive defense representation for Pottsville residents.',
            practiceLink: '/practice-areas/criminal-defense',
            practiceLabel: 'Learn more about our Criminal Defense services',
        },
    },
    'lehighton': {
        'family-law': {
            practiceSlug: 'family-law',
            title: 'Family Law in Lehighton',
            metaTitle: 'Family Law Attorney Lehighton PA | Holman & Pitts Law',
            metaDescription: 'Family law attorneys serving Lehighton and Carbon County. Divorce, custody, support & adoption. Holman & Pitts Law. Call 570-668-5321.',
            content: 'Lehighton families facing divorce, custody disputes, or other family law matters can count on Holman & Pitts Law. We practice in both Carbon County and Schuylkill County courts, providing seamless representation for families in the Lehighton area. Our mother-daughter team understands that family law cases affect your entire household, and we approach every case with the compassion and determination your family deserves.',
            practiceLink: '/practice-areas/family-law',
            practiceLabel: 'Learn more about our Family Law services',
        },
    },
    'frackville': {
        'estate-planning': {
            practiceSlug: 'estate-planning',
            title: 'Estate Planning in Frackville',
            metaTitle: 'Estate Planning Attorney Frackville PA | Holman & Pitts Law',
            metaDescription: 'Estate planning attorneys serving Frackville, PA. Wills, trusts, powers of attorney & probate. Attorney Holman practiced in Frackville for years. Call 570-668-5321.',
            content: 'Frackville residents have trusted Attorney Christine Holman since she first opened her practice in town in 2000. Our estate planning services help Frackville families protect their assets and plan for the future with personalized wills, trusts, powers of attorney, and probate administration. We know this community and we take the time to understand each family\'s unique needs.',
            practiceLink: '/practice-areas/estate-planning',
            practiceLabel: 'Learn more about our Estate Planning services',
        },
    },
};

export function getAllLocationParams(): { town: string }[] {
    return Object.keys(locations).map((town) => ({ town }));
}

export function getAllLocationPracticeParams(): { town: string; practice: string }[] {
    const params: { town: string; practice: string }[] = [];
    for (const [town, variants] of Object.entries(locationPracticeVariants)) {
        for (const practice of Object.keys(variants)) {
            params.push({ town, practice });
        }
    }
    return params;
}
