import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Grid from '@mui/joy/Grid';
import Avatar from '@mui/joy/Avatar';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Grid container spacing={2} sx={{
                flexGrow: 1,
                paddingTop: 20,
                paddingBottom: 20,
                alignItems: 'center',
            }}>
                <Grid xs={12} md={8}>
                    <Typography
                        level='h1'
                        variant='plain'
                        sx={{
                            fontSize: {xs: 50, sm: 60},
                            textAlign: 'left',
                        }}
                    >
                        Hi, {"I'm"} Lucas.<br />
                        I build web things.
                    </Typography>
                    <Typography level='body-lg'>
                        Checkout some of the things {"I've"} built <Link
                            component={RouterLink}
                            to={'/portfolio'}
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
                </Grid>
                <Grid xs={12} md={4}>
                    <Avatar
                        alt='Lucas Schvindt'
                        src='src/assets/lucas.jpeg'
                        sx={{
                            "--Avatar-size": "200px",
                        }}
                    />
                </Grid>
            </Grid>
        </motion.div>
    );
}