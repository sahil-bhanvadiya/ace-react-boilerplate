import { useLocation } from '@tanstack/react-router';
import Navbar from './Navbar';

const publicPaths = ['/login'];

const NavbarWrapper = () => {
  const location = useLocation();
  if (publicPaths.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
};

export default NavbarWrapper;
