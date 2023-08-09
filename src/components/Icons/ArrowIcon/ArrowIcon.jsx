import PropTypes from 'prop-types';
import styles from './ArrowIcon.module.css';

const ArrowIcon = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24px" height="24px" viewBox="0 0 24 24" style={style} className={styles.arrowIcon}>
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10-4 4-4-4"/>
    </svg>
);

ArrowIcon.propTypes = {
    style: PropTypes.object,
};

export default ArrowIcon;