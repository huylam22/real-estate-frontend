import React, { useRef, useState, useEffect, createRef } from "react";
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
import Modal from "../../modal/Modal";
import Login from "../../molecules/LoginForm/Login";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Properties",
    link: "/properties",
  },
];
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const ref = useRef();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [openModal]);
  console.log(ref.current);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4">
      <NavLinkComponent diabled link="/">
        <img
          src="/logo-bright.png"
          alt=""
          className="w-[250px] h-[100px] absolute object-cover top-0 right-0  lg:top-[-10px] lg:left-[-30px]"
        />
      </NavLinkComponent>
      {navLinks.map((item, index) => (
        <NavLinkComponent key={index} link={item.link}>
          {item.title}
        </NavLinkComponent>
      ))}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          className="px-5 py-1 text-lg font-medium flex items-center border border-white hover:bg-white hover:text-secondary rounded-lg transition-all"
          onClick={() => setOpenModal(true)}
        >
          Đăng nhập
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-lg"
      >
        <NavLink
          className="px-5 py-1 text-lg font-medium hover:bg-white hover:text-secondary flex items-center  border border-white rounded-lg transition-all"
          to="/property-post"
        >
          Ký gửi nhà đất
        </NavLink>
      </Typography>
    </ul>
  );

  const navListMobile = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4">
      {navLinks.map((item, index) => (
        <NavLinkComponent key={index} link={item.link}>
          {item.title}
        </NavLinkComponent>
      ))}
    </ul>
  );

  return (
    <>
      <Modal
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        bodyClassName={`lg:w-full max-w-[450px] bg-white py-10 px-12 rounded-lg`}
      >
        <Login
          ref={ref}
          closeModal={() => {
            setOpenModal(false);
          }}
        ></Login>
      </Modal>
      <Navbar className="fixed lg:sticky inset-0 z-10 h-max max-w-full lg:px-8 lg:py-4 bg-black outline-none rounded-none border border-none backdrop-blur-lg bg-opacity-80">
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
                className="lg:w-[200px] lg:h-[200px] w-[200px] h-[80px] object-cover absolute right-0  lg:top-[-85px] lg:left-[-30px]"
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
            onClick={() => setOpenModal(true)}
          >
            Đăng nhập
          </Button>

          <Button
            variant="gradient"
            className="mb-2 border border-white text-white "
            fullWidth
            onClick={() => {
              window.location.href = "/property-post";
            }}
          >
            Ký gửi nhà đất
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Header;

const NavLinkComponent = ({ diabled, link, children }) => {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-medium text-lg"
    >
      <NavLink
        to={link}
        className={
          diabled
            ? ""
            : ({ isActive }) =>
                isActive ? "flex items-center" : "opacity-50 flex items-center"
        }
      >
        {children}
      </NavLink>
    </Typography>
  );
};
