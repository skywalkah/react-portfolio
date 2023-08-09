import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import PortfolioItem from '../components/PortfolioItem/';
import { motion } from 'framer-motion';
import borrowhoodImg from '../assets/borrowhood.png';
import recipePatchImg from '../assets/recipe-patch.png';
import pwaTextEditorImg from '../assets/pwa-text-editor.png';
import mvcBlogImg from '../assets/mvc-blog.png';
import jsGameImg from '../assets/js-game.png';
import passwordGeneratorImg from '../assets/password-generator.png';

export default function PortfolioPage() {
    const portfolioItems = [
        {title: 'BorrowHood', image: borrowhoodImg, repoLink: 'https://github.com/skywalkah/borrowhood', webLink: 'https://polar-beach-65067-18b2f94f915d.herokuapp.com/'},
        {title: 'Recipe Patch', image: recipePatchImg, repoLink: 'https://github.com/skywalkah/recipe-patch', webLink: 'https://skywalkah.github.io/recipe-patch/'},
        {title: 'PWA: Text Editor', image: pwaTextEditorImg, repoLink: 'https://github.com/skywalkah/PWA-text-editor', webLink: 'https://fast-hamlet-98043-b16aa05f192d.herokuapp.com/'},
        {title: 'MVC: Tech Blog', image: mvcBlogImg, repoLink: 'https://github.com/skywalkah/mvc-tech-blog', webLink: 'https://infinite-reaches-27872-0c8235452d44.herokuapp.com/'},
        {title: 'Javascript Quiz Game', image: jsGameImg, repoLink: 'https://github.com/skywalkah/javascript-quiz-game', webLink: 'https://skywalkah.github.io/javascript-quiz-game/'},
        {title: 'Password generator', image: passwordGeneratorImg, repoLink: 'https://github.com/skywalkah/password-generator', webLink: 'https://skywalkah.github.io/password-generator/'}
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
                    <PortfolioItem
                        key={index}
                        title={portfolioItem.title}
                        image={portfolioItem.image}
                        repoLink={portfolioItem.repoLink}
                        webLink={portfolioItem.webLink }
                    />
                ))}
            </Box>
        </motion.div>
    );
}
