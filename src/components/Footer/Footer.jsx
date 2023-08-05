import Link from '@mui/joy/Link';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="https://github.com/skywalkah" target="_blank" rel="noreferrer">
                <GithubIcon />
            </Link>
            <Link href="https://github.com/skywalkah" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </Link>
        </footer>
    )
}

export default Footer;