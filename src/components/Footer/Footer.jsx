import Link from '@mui/joy/Link';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import Typography from '@mui/joy/Typography';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialLinks}>
                <li>
                    <Link href="https://github.com/skywalkah" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/uxwebdesign/" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </Link>
                </li>
            </ul>
            <div className={styles.copy}>
                <Typography color="neutral" level="body-xs" align="center">
                    &copy; 2023 Lucas Schvindt. All rights reserved.
                </Typography>
            </div>
        </footer>
    )
}

export default Footer;