import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/joy/Link';
import ModeToggle from '../ModeToggle';
import styles from './Navigation.module.css';

function Navigation() {
    const links = [
        {to: "/", text: "Home"},
        {to: "/about", text: "About me"},
        {to: "/contact", text: "Contact"},
        {to: "/resume", text: "Resume"}
    ];

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className={`${styles.navLink} ${styles.textLight}`}
                            component={RouterLink}
                            to={link.to}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <ModeToggle />
        </nav>
    );
}

export default Navigation;