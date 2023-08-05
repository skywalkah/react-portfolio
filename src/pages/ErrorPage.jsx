import { useRouteError } from 'react-router-dom';
import Typography from '@mui/joy/Typography';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
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
        </div>
    );
}
