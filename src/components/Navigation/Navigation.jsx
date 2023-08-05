import PropTypes from 'prop-types';
import ModeToggle from '../ModeToggle';

function Navigation({ links }) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {links.map((link) => link)}
            </ul>
            <ModeToggle />
        </nav>
    );
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
};

export default Navigation;