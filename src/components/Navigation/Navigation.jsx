import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/joy/Link';
import ModeToggle from '../ModeToggle';

function Navigation() {
    const links = [
        {to: "/", text: "Home"},
        {to: "/about", text: "About me"},
        {to: "/contact", text: "Contact"},
        {to: "/resume", text: "Resume"}
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className="nav-link text-light"
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