import React from 'react';
import PropTypes from 'prop-types';

function Menu({ menu }) {
  return (
    <div className="NavBarItem block h-full w-full items-center mt-4 mb-4 sm:ml-4 sm:mr-4 sm:mt-0 sm:mb-0">
      {menu.type === 'Logo'
        ? (
          <a href={menu.url} className="Logo text-opacity-0 flex justify-center items-center sm:h-full">
            {menu.name}
            <img className="LogoImage flex items-center justify-center min-h-logo min-w-logo" src={menu.img} alt="" />
          </a>
        )
        : <a href={menu.url} className="Menu block w-full h-full"><b className="MenuName flex h-full items-center justify-center">{menu.name}</b></a>}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default Menu;
