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
        e.preventDefault();

        const params = new URLSearchParams(window.location.search);
        let allowed = ['header', 'footer', 'theme', 'membertools', 'megamenu', 'socials'];
        const goingToInterior = e.target.text.includes('Interior');
        let newParams = new URLSearchParams();

        if (goingToInterior) {
            allowed.push('template');
            // Save current Home Page params (excluding template)
            const homeParams = new URLSearchParams(params);
            homeParams.delete('template');
            sessionStorage.setItem('homePageParams', homeParams.toString());

            // Try to restore saved Interior Page params
            const savedInterior = sessionStorage.getItem('interiorPageParams');
            if (savedInterior) {
                newParams = new URLSearchParams(savedInterior);
                sessionStorage.removeItem('interiorPageParams');
            }
        } else {
            // Save current Interior Page params (excluding template)
            const interiorParams = new URLSearchParams(params);
            interiorParams.delete('template');
            sessionStorage.setItem('interiorPageParams', interiorParams.toString());

            // Try to restore saved Home Page params
            const savedHome = sessionStorage.getItem('homePageParams');
            if (savedHome) {
                newParams = new URLSearchParams(savedHome);
                sessionStorage.removeItem('homePageParams');
            }
        }

        // If no saved params, build new params with only allowed keys
        if ([...newParams].length === 0) {
            allowed.forEach(key => {
                if (params.has(key)) {
                    newParams.set(key, params.get(key));
                }
            });
        }

        if (goingToInterior) {
            newParams.set('template', 'int');
            setIsInterior(true);
        } else {
            setIsInterior(false);
        }

        const newUrl = newParams.toString() ? `/?${newParams.toString()}` : '/';
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