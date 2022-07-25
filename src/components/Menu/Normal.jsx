import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import LogoImage from '../../assets/images/homepage_logo.png';

function Normal({ menuList }) {
  const logo = menuList[0];
  const subMenuList = menuList.slice(1);
  return (
    <nav className="NormalNavBar flex h-full w-full items-center mt-4 mb-4 sm:ml-4 sm:mr-4 sm:mt-0 sm:mb-0">
      <div className="LogoImageContainer w-50">
        <Link to={logo.url}>
          <img
            className="LogoImage flex items-center justify-center max-w-logo max-h-14"
            src={LogoImage || logo.img}
            alt=""
          />
        </Link>
      </div>
      { subMenuList.map((menu) => (
        <Link to={menu.url} className="Menu block w-full h-full"><b className="MenuName flex h-full items-center justify-center">{menu.name}</b></Link>
      ))}
    </nav>
  );
}

Normal.propTypes = {
  menuList: PropTypes.arrayOf(Menu).isRequired,
};

export default Normal;
