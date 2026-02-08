import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SafeExit from '@/components/SafeExit';
import './globals.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://holmanpittslaw.com'),
    title: {
        default: 'Holman & Pitts Law | Tamaqua Divorce & Criminal Defense Attorneys',
        template: '%s | Holman & Pitts Law',
    },
    description: 'Divorce, criminal defense & estate planning attorneys serving Tamaqua, Pottsville, Frackville & Lehighton. Former DA Christine Holman & Public Defender Jacqueline Pitts. Call 570-668-5321.',
    keywords: 'divorce lawyer Tamaqua, criminal defense attorney Schuylkill County, estate planning lawyer Tamaqua, family law attorney Pottsville, DUI lawyer Schuylkill County, Holman Pitts Law',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Holman & Pitts Law | Tamaqua Divorce & Criminal Defense Attorneys',
        description: 'Experienced Legal Advocacy with Compassion and Results. Former DA & Public Defender serving Schuylkill & Carbon Counties.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Holman & Pitts Law',
        url: 'https://holmanpittslaw.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Holman & Pitts Law | Tamaqua Divorce & Criminal Defense Attorneys',
        description: 'Experienced Legal Advocacy with Compassion and Results. Former DA & Public Defender serving Schuylkill & Carbon Counties.',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <SafeExit />
                <Footer />
            </body>
        </html>
    );
}
