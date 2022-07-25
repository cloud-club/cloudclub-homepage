import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import LogoImage from '../../assets/images/homepage_logo.png';

function Hamburger({ menuList }) {
  const [isOpen, setIsOpen] = useState(false);
  const logo = menuList[0];
  const subMenuList = menuList.slice(1);
  const clickHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const moveHandler = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <>
      <nav className="HamburgerNavBar flex justify-between items-center p-4">
        <Link to={logo.url}>
          <img className="LogoImage flex items-center justify-center max-h-14" src={LogoImage || logo.img} alt="" />
        </Link>
        <HamburgerMenu isOpen={isOpen} menuClicked={clickHandler} color="rgb(33, 136, 243)" />
      </nav>
      <section>
        <div
          className={`MenuItems bg-white text-black absolute mt-1 w-full border-solid border-gray-200 border-t-2 border-l-2 border-r-2 ${isOpen ? 'block' : 'hidden'}`}
        >
          {subMenuList.map((menu) => (
            <a href="/" onClick={moveHandler}>
              <Link to={menu.url} className="Menu block w-full h-12 border-solid border-gray-200 border-b-2">
                <b className="MenuName flex h-full items-center justify-center">{menu.name}</b>
              </Link>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

Hamburger.propTypes = {
  menuList: PropTypes.arrayOf(Menu).isRequired,
};

export default Hamburger;
