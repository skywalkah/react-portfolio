import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import PortfolioItem from '../components/PortfolioItem/';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
    const portfolioItems = [
        {title: 'BorrowHood', image: '', link: 'https://polar-beach-65067-18b2f94f915d.herokuapp.com/'},
        {title: 'Recipe Patch', image: '', link: ''},
        {title: 'JATE: Just Another Text Editor', image: '', link: ''},
        {title: '(MVC): Tech Blog', image: '', link: 'https://infinite-reaches-27872-0c8235452d44.herokuapp.com/'},
        {title: 'Javascript Quiz Game', image: '', link: 'https://skywalkah.github.io/javascript-quiz-game/'},
        {title: 'Password generator', image: '', link: 'https://skywalkah.github.io/password-generator/'}
    ]
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.3 }}} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Typography
                level="h1"
                variant="plain"
                sx={{
                    fontSize: {xs: 40, sm: 50},
                    mt: 6,
                    mb: 2
                }}
            >
                Portfolio
            </Typography>
            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                {portfolioItems.map((portfolioItem, index) => (
                    <PortfolioItem key={index} title={portfolioItem.title} image={portfolioItem.image} link={portfolioItem.link} />
                ))}
            </Box>
        </motion.div>
    );
}
