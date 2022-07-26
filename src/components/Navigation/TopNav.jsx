import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import HamburgerMenu from '../Menu/Hamburger';
import NormalMenu from '../Menu/Normal';
import isMobile from '../../utils/device';
import Tracer from '../Scroll/Tracer';

function TopNav({ menuList }) {
  return (
    <div className="TopNavContainer">
      <section className="TopNavBar flow-root bg-white h-full items-center sm:flex">
        {isMobile()
          ? <HamburgerMenu menuList={menuList} />
          : <NormalMenu menuList={menuList} />}
      </section>
      <Tracer />
    </div>

  );
}

TopNav.propTypes = {
  menuList: PropTypes.arrayOf(Menu).isRequired,
};

export default TopNav;
