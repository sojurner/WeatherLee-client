import React from 'react';
import { NavLink } from 'react-router-dom';

import '../CSS/NavBar.css';

export const NavBar = ({ openModal }) => {
  const navTabs = ['daily', 'weekly'];
  const navBar = navTabs.map((tab, index) => {
    return (
      <NavLink
        onClick={openModal}
        className="nav-link"
        key={`nav-${index}`}
        to={`/${tab}`}
      >
        {tab}
      </NavLink>
    );
  });
  return <nav className="nav-bar">{navBar}</nav>;
};
