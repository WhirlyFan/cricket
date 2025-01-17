import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { Link } from 'react-router-dom';

export const CricketLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        d="M8 16C8 11.5817 11.5817 8 16 8H20L18 10H16C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22H18L20 24H16C11.5817 24 8 20.4183 8 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link to="/" className="flex items-center">
          <CricketLogo />
          <p className="font-bold text-inherit">Cricket</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/users">
            Users
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" to="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" to="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
