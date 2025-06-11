'use client';
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import styles from './Header.module.css';

const Header = ({ isInterior, setIsInterior }) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    const handleHomeClick = (e) => {
        e.preventDefault(); // Prevent default navigation

        // Get current params
        const params = new URLSearchParams(window.location.search);

        // Decide which parameters to keep
        let allowed = ['header', 'footer', 'theme', 'membertools', 'megamenu', 'socials'];
        const isInterior = e.target.text.includes('Interior');
        if (isInterior) {
            allowed.push('template');
        }

        // Build new params with only allowed keys
        const newParams = new URLSearchParams();
        allowed.forEach(key => {
            if (params.has(key)) {
                newParams.set(key, params.get(key));
            }
        });

        let newUrl = '';
        // For Interior Page Template, always set template=int
        if (isInterior) {
            newParams.set('template', 'int');
            setIsInterior(true);
                    // Build new URL
           newUrl = newParams.toString() ? `/interior?${newParams.toString()}` : '/';
        } else {
            setIsInterior(false);
            // Build new URL
            newUrl = newParams.toString() ? `/?${newParams.toString()}` : '/';
        }



        // Navigate
        router.push(newUrl);
    };


    return (
        <header className={styles.header}>
            <div className="container-fluid">
                <div className="row">
                <div className="col-xs-12">
                    <nav style={{display: 'flex', gap: '20px', padding: '10px 15px'}}>
                        <Link className={styles.navLink} href="/" onClick={handleHomeClick}>Home Page Template</Link>
                        <Link className={styles.navLink} href="/interior?template=int" onClick={handleHomeClick}>Interior Page Template</Link>
                    </nav>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;