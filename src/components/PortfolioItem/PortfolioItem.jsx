import { useState } from 'react';
import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import LinkIcon from '../Icons/LinkIcon/LinkIcon';
import GithubIcon from '../Icons/GithubIcon/GithubIcon';
import Tooltip from '@mui/joy/Tooltip';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
function PortfolioItem ({ title, image, repoLink, webLink }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        console.log('Image clicked!'); // Check if this is being logged
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card
                component='li'
                onClick={handleOpen}
                sx={{
                    minWidth: 300,
                    flexGrow: 1,
                    bgcolor: 'initial',
                    boxShadow: 'none',
                    '--Card-padding': '0px',
                    cursor: 'pointer',
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <AspectRatio ratio='16/10'>
                        <figure>
                            <img
                                src={image}
                                loading='lazy'
                                alt={title}
                            />
                        </figure>
                    </AspectRatio>
                    <CardCover
                        className='gradient-cover'
                        sx={{
                            '&:hover, &:focus-within': {
                                opacity: 1,
                            },
                            opacity: 0,
                            transition: '0.1s ease-in',
                            background:
                            'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                        }}
                    >
                        {/* The first box acts as a container that inherits style from the CardCover */}
                        <Box>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    flexGrow: 1,
                                    alignSelf: 'flex-end',
                                }}
                            >
                                <Typography
                                    level='h2'
                                    noWrap
                                    sx={{
                                        fontSize: 'lg',
                                        color: '#fff',
                                        textOverflow: 'ellipsis',
                                        overflow: 'visible',
                                        display: 'block',
                                        position: 'relative',
                                        width: '100%',
                                    }}
                                >
                                        {title}
                                    <Tooltip title='Repository' variant='solid'>
                                        <IconButton
                                            onClick={() => window.open(repoLink, '_blank')}
                                            sx={{
                                                position: 'absolute',
                                                bottom: '0',
                                                right: '0',
                                            }}
                                        >
                                            <GithubIcon fillColor='#FFF' />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Website' variant='solid'>
                                        <IconButton
                                            onClick={() => window.open(webLink, '_blank')}
                                            sx={{
                                                position: 'absolute',
                                                bottom: '0',
                                                right: '46px',
                                            }}
                                        >
                                            <LinkIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </Box>
                        </Box>
                    </CardCover>
                </Box>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
            >
                
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                    }}
                >   
                    <ModalClose
                        variant='plain'
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.surface',
                        }}
                    />
                    <img 
                        src={image} 
                        alt={title} 
                        style={{
                            width: '100%',
                            height: 'auto'
                        }} 
                    />
                </Box>
            </Modal>
        </>
    );
}

PortfolioItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    repoLink: PropTypes.string,
    webLink: PropTypes.string,
};

export default PortfolioItem;