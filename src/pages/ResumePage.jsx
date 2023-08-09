import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import PDFIcon from '../components/Icons/PDFIcon';
import ArrowIcon from '../components/Icons/ArrowIcon';
import { motion } from 'framer-motion';

export default function ResumePage() {
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.3 }}} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Box
                sx={{
                    maxWidth: '480px',
                    mx: 'auto',
                }}
            >
                <Typography
                    level='h1'
                    variant='plain'
                    sx={{
                        fontSize: {xs: 40, sm: 50},
                        mt: 6,
                        mb: 2
                    }}
                >
                    Resume
                </Typography>
                <Box
                    sx={{
                        width: 320,
                        pl: '24px',
                    }}
                >
                    <List
                        size='lg'
                        sx={(theme) => ({
                            // Gatsby colors
                            '--joy-palette-primary-plainColor': '#8a4baf',
                            '--joy-palette-neutral-plainHoverBg': 'transparent',
                            '--joy-palette-neutral-plainActiveBg': 'transparent',
                            '--joy-palette-primary-plainHoverBg': 'transparent',
                            '--joy-palette-primary-plainActiveBg': 'transparent',
                            [theme.getColorSchemeSelector('dark')]: {
                                '--joy-palette-text-secondary': '#635e69',
                                '--joy-palette-primary-plainColor': '#d48cff',
                            },
                            '--List-insetStart': '32px',
                            '--ListItem-paddingY': '0px',
                            '--ListItem-paddingRight': '16px',
                            '--ListItem-paddingLeft': '21px',
                            '--ListItem-startActionWidth': '0px',
                            '--ListItem-startActionTranslateX': '-50%',
                            [`& .${listItemButtonClasses.root}`]: {
                                borderLeftColor: 'divider',
                            },
                            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                                borderLeftColor: 'currentColor',
                            },
                        })}
                    >
                        <ListItem nested>
                            <a 
                                href="/src/assets/Lucas-Schvindt-Fullstack-Developer.pdf" 
                                download="Lucas-Schvindt-Fullstack-Developer.pdf"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <ListItem component='div' startAction={<PDFIcon />}>
                                    <Typography level='body-lg' sx={{ textTransform: 'uppercase' }}>
                                        
                                            <ListItemButton style={{ borderLeftColor: 'transparent' }}>
                                                Download Resume
                                            </ListItemButton>
                                    </Typography>
                                </ListItem>
                            </a>
                        </ListItem>
                        <ListItem
                            nested
                            sx={{ my: 1 }}
                            startAction={
                                <IconButton
                                    variant='plain'
                                    size='sm'
                                    color='neutral'
                                    onClick={() => setOpen(!open)}
                                >
                                    <ArrowIcon
                                        style={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                                    />
                                </IconButton>
                            }
                        >
                        <ListItem>
                            <Typography
                                level='inherit'
                                sx={{
                                    fontWeight: open ? 'bold' : undefined,
                                    color: open ? 'text.primary' : 'inherit',
                                }}
                            >
                                Frontend
                            </Typography>
                        </ListItem>
                        {open && (
                            <List sx={{ '--ListItem-paddingY': '8px' }}>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    HTML
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    CSS
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    Javascript
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    React
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    Responsive Design
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    Less / Sass
                                </ListItem>
                                <ListItem sx={{
                                    borderLeftColor: '#ccc',
                                    borderLeftWidth: '1px',
                                    borderLeftStyle: 'solid',
                                }}>
                                    Git
                                </ListItem>
                            </List>
                        )}
                        </ListItem>
                        <ListItem
                            nested
                            sx={{ my: 1 }}
                            startAction={
                                <IconButton
                                variant='plain'
                                size='sm'
                                color='neutral'
                                onClick={() => setOpen2((bool) => !bool)}
                                >
                                    <ArrowIcon
                                        style={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
                                    />

                                </IconButton>
                            }
                        >
                            <ListItem>
                                <Typography
                                    level='inherit'
                                    sx={{
                                        fontWeight: open2 ? 'bold' : undefined,
                                        color: open2 ? 'text.primary' : 'inherit',
                                    }}
                                >
                                    Backend
                                </Typography>
                            </ListItem>
                            {open2 && (
                                <List sx={{ '--ListItem-paddingY': '8px' }}>
                                    <ListItem sx={{
                                        borderLeftColor: '#ccc',
                                        borderLeftWidth: '1px',
                                        borderLeftStyle: 'solid',
                                    }}>
                                        Node
                                    </ListItem>
                                    <ListItem sx={{
                                        borderLeftColor: '#ccc',
                                        borderLeftWidth: '1px',
                                        borderLeftStyle: 'solid',
                                    }}>
                                        Express
                                    </ListItem>
                                    <ListItem sx={{
                                        borderLeftColor: '#ccc',
                                        borderLeftWidth: '1px',
                                        borderLeftStyle: 'solid',
                                    }}>
                                        NextJS
                                    </ListItem>
                                    <ListItem sx={{
                                        borderLeftColor: '#ccc',
                                        borderLeftWidth: '1px',
                                        borderLeftStyle: 'solid',
                                    }}>
                                        MongoDB
                                    </ListItem>
                                    <ListItem sx={{
                                        borderLeftColor: '#ccc',
                                        borderLeftWidth: '1px',
                                        borderLeftStyle: 'solid',
                                    }}>
                                        MySQL
                                    </ListItem>
                                </List>
                            )}
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </motion.div>
    );
}