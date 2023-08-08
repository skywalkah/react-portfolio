import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
                About me
            </Typography>
            <Typography level="body-lg" sx={{pb:3}}>
                {"Hi, I'm Lucas. Originally from Argentina, I've been fusing creativity and coding into beautiful websites in the United States since 1999. As a full-stack developer, I deeply resonate with Antoine de Saint-Exupéry's wisdom: “Perfection is achieved when there is nothing left to take away”. I apply this philosophy to my work, aiming to create intuitive and elegant solutions that look simple, yet perform beautifully."}
            </Typography>
            <Typography level="body-lg" sx={{pb:3}}>
                {"Outside the realm of curly braces and semi-colons, I find joy in the rustic simplicity of baking my own bread and pizza, infusing love into each knead. Just like my code, I believe the best loaf is a perfect blend of simplicity and craftsmanship."}
            </Typography>
            <Typography level="body-lg" sx={{pb:3}}>
                {"When I'm not in the kitchen or behind the keyboard, I'm likely to be found exploring the great outdoors, hiking trails, or setting up camp under the stars."}
            </Typography>
            <Typography level="body-lg">
                {"If you'd like to get in touch, you can send me a message "}
                <Link
                    component={RouterLink}
                    to={'/contact'}
                    variant={'plain'}
                    underline='none'
                    sx={{
                        color: "#FA4B00",
                        p: 0,
                        ":hover": {
                            color: "#FA4B00",
                            textDecoration: "underline",
                            backgroundColor: "transparent",
                        },
                    }}
                >here</Link>.
            </Typography>
        </motion.div>
    );
}
