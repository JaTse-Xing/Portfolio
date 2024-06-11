import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full py-2 sm:px-10 px-5 flex justify-between items-center bg-black fixed top-0 z-20">
      <nav className="flex w-full screen-max-width items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-8 h-8 rounded-full object-contain" />
          <p className="px-5 text-sm cursor-pointer text-gray-200 hover:text-white">
            Jaspreet &nbsp; <span className="hidden sm:block">| 3D Developer</span>
          </p>
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to={nav.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-5 text-sm cursor-pointer text-gray-200 hover:text-white transition-all"
              onSetActive={() => setActive(nav.title)}
            >
              {nav.title}
            </Link>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          
            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-gray-700"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link
                      to={nav.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
