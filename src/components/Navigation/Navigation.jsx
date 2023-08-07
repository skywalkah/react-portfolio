import { Link as RouterLink, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import IconButton from '@mui/joy/IconButton';
import ModeToggle from '../ModeToggle';
import HomeIcon from '../Icons/HomeIcon';
import MenuIcon from '../Icons/MenuIcon';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import styles from './Navigation.module.css';

function Navigation() {
    const currentPage = useLocation().pathname;

    const links = [
        {to: '/about', text: 'About me'},
        {to: '/portfolio', text: 'Portfolio'},
        {to: '/contact', text: 'Contact'},
        {to: '/resume', text: 'Resume', featured: true},
    ];

    return (
        <Box
            component='nav'
            sx={{ flexGrow: 1 }}
            className={styles.navbar}
        >
            <IconButton>
                <Link
                    component={RouterLink}
                    to='/'
                >
                    <HomeIcon className={currentPage !== '/' ? styles.notActive : ''} />
                </Link>
            </IconButton>

            {/* Regular horizontal navigation for larger screens */}
            <List className={styles.navbarNav} orientation='horizontal'>
                {links.map((link, index) => (
                    <ListItem key={index} className={`${link.logo ? styles.logo : ''}`}>
                        <Link
                            component={RouterLink}
                            to={link.to}
                            variant={'plain'}
                            underline='hover'
                            color='neutral'
                            className={`${currentPage === link.to ? styles.active  : ''}`}
                        >
                            {link.text}
                        </Link>
                    </ListItem>
                ))}
            </List>

            {/* Dropdown navigation for smaller screens */}
            <Dropdown>
                <MenuButton className={styles.mobileMenu}>
                    <MenuIcon />
                </MenuButton>
                <Menu
                    variant='plain'>
                    {links.map((link, index) => (
                        <MenuItem value={link.to} key={index}>
                            <Link
                                component={RouterLink}
                                to={link.to}
                            >
                                {link.text}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Dropdown>

            <ModeToggle className={styles.themeToggle} />
        </Box>
    );
}

export default Navigation;