import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";

const Header = ({ isInterior, setIsInterior }) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    const handleHomeClick = (e) => {
        e.preventDefault(); // Prevent default navigation

        // Get current params
        const params = new URLSearchParams(window.location.search);

        // Decide which parameters to keep
        let allowed = ['header', 'footer', 'theme'];
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
        <header>
            <div className="container">
                <div className="row">
                <div className="col-xs-12">
                    <nav style={{display: 'flex', gap: '20px', padding: '10px 15px'}}>
                        <Link href="/" onClick={handleHomeClick}>Home Page Template</Link>
                        <Link href="/?template=int" onClick={handleHomeClick}>Interior Page Template</Link>
                    </nav>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header;