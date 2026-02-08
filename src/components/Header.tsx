'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    const isActive = (path: string) => pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveDropdown(null);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        {
            title: 'Family Law',
            href: '/practice-areas/family-law',
            subItems: [
                { title: 'Divorce', href: '/practice-areas/family-law/divorce' },
                { title: 'Child Custody', href: '/practice-areas/family-law/child-custody' },
                { title: 'Adoption', href: '/practice-areas/family-law/adoption' },
                { title: 'Spousal Support', href: '/practice-areas/family-law/spousal-support' },
                { title: 'Grandparents\' Rights', href: '/practice-areas/family-law/grandparents-rights-pa' },
            ],
        },
        {
            title: 'Criminal Defense',
            href: '/practice-areas/criminal-defense',
            subItems: [
                { title: 'DUI Defense', href: '/practice-areas/criminal-defense/dui' },
                { title: 'First-Offense DUI', href: '/practice-areas/criminal-defense/first-offense-dui-schuylkill' },
                { title: 'Drug Crimes', href: '/practice-areas/criminal-defense/drug-crimes' },
                { title: 'Juvenile Defense', href: '/practice-areas/criminal-defense/juvenile-defense' },
            ],
        },
        {
            title: 'Estate Planning',
            href: '/practice-areas/estate-planning',
            subItems: [
                { title: 'Wills & Trusts', href: '/practice-areas/estate-planning/wills-trusts' },
                { title: 'Power of Attorney', href: '/practice-areas/estate-planning/power-of-attorney' },
                { title: 'Probate', href: '/practice-areas/estate-planning/probate' },
            ],
        },
        {
            title: 'About Us',
            href: '/about',
            subItems: [
                { title: 'Our Story', href: '/about#story' },
                { title: 'Meet the Team', href: '/about#team' },
            ],
        },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.nav} ref={navRef}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <div className={styles.logoText}>Holman & Pitts Law, LLC</div>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    {navItems.map((item) => (
                        <div
                            key={item.title}
                            className={styles.navItem}
                            onMouseEnter={() => setActiveDropdown(item.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                                onClick={closeMenu}
                            >
                                {item.title}
                                <svg
                                    className={`${styles.caret} ${activeDropdown === item.title ? styles.caretRotated : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={`${styles.dropdown} ${activeDropdown === item.title ? styles.dropdownOpen : ''}`}>
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        className={styles.dropdownLink}
                                        onClick={closeMenu}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className={`${styles.navLink} ${styles.contactLink} ${isActive('/contact') ? styles.active : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.menuBar}></span>
                    <span className={styles.menuBar}></span>
                    <span className={styles.menuBar}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    {navItems.map((item) => (
                        <div key={item.title} className={styles.mobileNavItem}>
                            <div className={styles.mobileNavHeader} onClick={() => toggleDropdown(item.title)}>
                                <span className={styles.mobileLink}>{item.title}</span>
                                <svg
                                    className={`${styles.mobileCaret} ${activeDropdown === item.title ? styles.mobileCaretRotated : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>

                            <div className={`${styles.mobileDropdown} ${activeDropdown === item.title ? styles.mobileDropdownOpen : ''}`}>
                                <Link
                                    href={item.href}
                                    className={styles.mobileDropdownLink}
                                    onClick={closeMenu}
                                >
                                    View All {item.title}
                                </Link>
                                {item.subItems.map((subItem) => (
                                    <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        className={styles.mobileDropdownLink}
                                        onClick={closeMenu}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className={`${styles.mobileLink} ${styles.mobileContactLink}`}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}
