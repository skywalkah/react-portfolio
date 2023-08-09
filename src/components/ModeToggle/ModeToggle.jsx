import * as React from 'react';
import PropTypes from 'prop-types';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import LightModeIcon from '../Icons/LightModeIcon';
import DarkModeIcon from '../Icons/DarkModeIcon'; 

function ModeToggle({ className }) {
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
            variant='plain'
            aria-label='Toggle light/dark mode'
            className={className}
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    );
}

ModeToggle.propTypes = {
    className: PropTypes.string,
};

export default ModeToggle;