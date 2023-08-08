import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
// import styles from './PortfilioItem.module.css';

function PortfolioItem ({ title, image, link }) {

    return (
        <Card
            component="li"
            sx={{
                minWidth: 300,
                flexGrow: 1,
                bgcolor: 'initial',
                boxShadow: 'none',
                '--Card-padding': '0px',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio="4/3">
                    <figure>
                        <img
                        src={image}
                        srcSet={`${image}&dpr=2 2x`}
                        loading="lazy"
                        alt={title}
                        />
                    </figure>
                </AspectRatio>
                <CardCover
                    className="gradient-cover"
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
                            <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                <Link
                                    href={link}
                                    overlay
                                    underline="none"
                                    sx={{
                                        color: '#fff',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        display: 'block',
                                    }}
                                >
                                    {title}
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </CardCover>
            </Box>
        </Card>
    );
}

PortfolioItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
};

export default PortfolioItem;