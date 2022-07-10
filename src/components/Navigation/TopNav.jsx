import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

function TopNav({ menuList }) {
  return (
    <nav className="TopNavBar flow-root bg-white h-full items-center sm:flex">
      { menuList.map((menu) => (
        <Menu menu={menu} />
      ))}
    </nav>
  );
}

TopNav.propTypes = {
  menuList: PropTypes.arrayOf(Menu).isRequired,
};

export default TopNav;
