'use client';
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import styles from './Header.module.css';
import cx from 'classnames';

const Header = ({ isInterior, setIsInterior }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const template = searchParams.get('template');


    const handleNavClick = (e) => {
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

        // For Interior Page Template, always set template=int
        if (isInterior) {
            newParams.set('template', 'int');
            setIsInterior(true);
        } else {
            setIsInterior(false);
        }

        // Build new URL
        const newUrl = newParams.toString() ? `/?${newParams.toString()}` : '/';

        // Navigate
        router.push(newUrl);
    };


    return (
        <header className={styles.header}>
            <div className="container-fluid">
                <div className="row">
                <div className="col-xs-12" style={{paddingLeft: '5px'}}>
                    <nav style={{display: 'flex', gap: '5px'}}>
                        <Link 
                            className={cx(styles.navLink, { [styles.active]: !template })}
                            href="/"
                            onClick={handleNavClick}
                        >Home Template</Link>
                        <Link 
                            className={cx(styles.navLink, { [styles.active]: template === 'int' })}
                            href="/?template=int" 
                            onClick={handleNavClick}
                        >Interior Template</Link>
                    </nav>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;