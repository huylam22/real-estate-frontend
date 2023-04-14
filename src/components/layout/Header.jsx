import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo-bright.png"
            alt=""
            className="w-[250px] h-[250px] absolute top-0 right-0  lg:top-[-85px] lg:left-[-30px]"
          />
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "flex items-center" : "opacity-50 flex items-center"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive ? "flex items-center" : "opacity-50 flex items-center"
          }
        >
          Properties
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <Button
          variant="outlined"
          className="px-5 py-1 text-lg font-medium flex items-center"
        >
          Login
        </Button>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <Button
          variant="outlined"
          className="px-5 py-1 text-lg font-medium hover:bg-white hover:text-secondary flex items-center"
        >
          Signup
        </Button>
      </Typography>
    </ul>
  );

  const navListMobile = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "flex items-center" : "opacity-50 flex items-center"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive ? "flex items-center" : "opacity-50 flex items-center"
          }
        >
          Properties
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="fixed lg:sticky inset-0 z-10 h-max max-w-full lg:px-8 lg:py-4 bg-black outline-none rounded-none border border-none backdrop-blur-xl">
        <div className="flex items-center justify-between text-white lg:text-white">
          <div className="flex items-center justify-between gap-4">
            <IconButton
              variant="text"
              className="ml-auto mb-3 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            <NavLink to="/" className="flex items-center lg:hidden">
              <img
                src="/logo-bright.png"
                alt=""
                className="w-[200px] h-[200px] absolute right-0  lg:top-[-85px] lg:left-[-30px]"
              />
            </NavLink>
          </div>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        <MobileNav open={openNav}>
          {navListMobile}
          <Button
            variant="gradient"
            className="mb-2 border border-white text-white"
            fullWidth
          >
            Login
          </Button>
          <Button
            variant="gradient"
            className="mb-2 border border-white text-white"
            fullWidth
          >
            Sign up
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Header;
