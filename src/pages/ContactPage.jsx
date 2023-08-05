import Typography from '@mui/joy/Typography';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <>
            <Typography
                level="h1"
                variant="plain"
            >
                Contact me
            </Typography>
            <ContactForm />
        </>
    );
}