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
                sx={{
                    fontSize: {xs: 40, sm: 50},
                    mt: 6,
                    mb: 2
                }}
            >
                Oops!
            </Typography>
            <Typography sx={{textAlign:'center'}}>
                Sorry, an unexpected error has occurred.
            </Typography>
            <Typography sx={{textAlign:'center'}}>
                Error: <b>{error.statusText || error.message}</b>
            </Typography>
        </motion.div>
    );
}
