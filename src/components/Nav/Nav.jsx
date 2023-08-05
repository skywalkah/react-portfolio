import Navigation from '../Navigation';
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/joy/Link';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navigation
      links={[
        <Link
            key={1}
            className="nav-link text-light"
            component={RouterLink}
            to="/"
        >
          Home
        </Link>,
        <Link
            key={2}
            className="nav-link text-light"
            component={RouterLink}
            to="/about"
        >
          About me
        </Link>,
        <Link
            key={3}
            className="nav-link text-light"
            component={RouterLink}
            to="/contact"
        >
         Contact
        </Link>,
        <Link
            key={4}
            className="nav-link text-light"
            component={RouterLink}
            to="/resume"
        >
         Resume
        </Link>
      ]}
    />
  );
}