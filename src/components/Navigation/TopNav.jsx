import React from 'react';
import Menu from './Menu';

function TopNav() {
  const menus = [
    {
      type: 'Logo',
      name: '',
      url: '/',
      img: 'https://i.ibb.co/Dw3Wz7f/001-1.png',
    },
    {
      type: 'Menu',
      name: '소개',
      url: '/intro',
      img: '',
    },
    {
      type: 'Menu',
      name: '1기 활동',
      url: '/intro',
      img: '',
    },
    {
      type: 'Menu',
      name: '운영 계획',
      url: '/intro',
      img: '',
    },
    {
      type: 'Menu',
      name: '2기 지원하기',
      url: '/intro',
      img: '',
    },
  ];
  return (
    <nav className="TopNavBar flow-root bg-white h-full items-center sm:flex">
      { menus.map((menu) => (
        <Menu menu={menu} />
      ))}
    </nav>
  );
}

export default TopNav;
