import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

export default function ResumePage() {
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
                Resume
            </Typography>
        </motion.div>
    );
}