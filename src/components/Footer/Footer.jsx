import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Box from '@mui/joy/Box';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import DribbbleIcon from '../Icons/DribbbleIcon'; 
import Typography from '@mui/joy/Typography';
import styles from './Footer.module.css';

const Footer = () => {
    const socialItems = [
        { to: 'https://github.com/skywalkah', text: <GithubIcon /> },
        { to: 'https://www.linkedin.com/in/uxwebdesign/', text: <LinkedInIcon /> },
        { to: 'https://dribbble.com/lukeswg', text: <DribbbleIcon /> }
    ];
    return (
        <footer className={styles.footer}>
            <List className={styles.socialLinks} orientation='horizontal'>
                {socialItems.map((link, index) => (
                    <ListItem key={index}>
                        <Link
                            component={RouterLink}
                            to={link.to}
                            className={styles.socialLink}
                            target='_blank'
                        >
                            {link.text}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Box className={styles.copy}>
                <Typography color='neutral' level='body-xs' align='center'>
                    &copy; 2023 Lucas Schvindt. All rights reserved.
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;