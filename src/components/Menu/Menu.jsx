import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/homepage_logo.png';

function Menu({ menu }) {
  return (
    <div className="NavBarItem block h-full w-full items-center mt-4 mb-4 sm:ml-4 sm:mr-4 sm:mt-0 sm:mb-0">
      {menu.type === 'Logo'
        ? (
          <Link to={menu.url} className="Logo text-opacity-0 flex justify-center items-center sm:h-full">
            <img className="LogoImage flex items-center justify-center min-h-logo min-w-logo" src={LogoImage || menu.img} alt="" />
          </Link>
        )
        : <Link to={menu.url} className="Menu block w-full h-full"><b className="MenuName flex h-full items-center justify-center">{menu.name}</b></Link>}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Menu;
