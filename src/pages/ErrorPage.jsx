import { useRouteError } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import { motion } from 'framer-motion';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

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
            >
                Oops!
            </Typography>
            <Typography>
                Sorry, an unexpected error has occurred.
            </Typography>
            <Typography>
                Error: <b>{error.statusText || error.message}</b>
            </Typography>
        </motion.div>
    );
}
