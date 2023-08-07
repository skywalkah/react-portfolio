
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HomeIcon.module.css';

const HomeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classNames(styles.homeIcon, className)}>
        <path fill="#000" fillRule="evenodd" stroke="null" d="M11.255 1.786a1.035 1.035 0 0 1 1.428 0l8.282 7.888 2.589 2.465a1.035 1.035 0 0 1-1.428 1.5l-.84-.8v7.815a2.07 2.07 0 0 1-2.07 2.07H4.721a2.07 2.07 0 0 1-2.07-2.07v-7.815l-.84.8a1.035 1.035 0 1 1-1.427-1.5l2.588-2.465 8.283-7.888zM4.72 10.867v9.787h4.142v-5.177a3.106 3.106 0 1 1 6.212 0v5.177h4.141v-9.787l-7.247-6.902-7.248 6.902zm8.283 9.787v-5.177a1.035 1.035 0 1 0-2.07 0v5.177h2.07z" clipRule="evenodd"/>
    </svg>
);


HomeIcon.propTypes = {
    className: PropTypes.string,
};


export default HomeIcon;