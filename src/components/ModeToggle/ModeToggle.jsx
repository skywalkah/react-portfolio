import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import LightModeIcon from '../LightModeIcon/';
import DarkModeIcon from '../DarkModeIcon/'; 

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <IconButton
            variant="plain"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}

export default ModeToggle;