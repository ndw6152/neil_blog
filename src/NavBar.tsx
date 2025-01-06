import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'; // Import the SCSS module

export enum RouteConfig {
  Home = '/',
  About = '/about',
  Page = '/page/:id',
}

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <NavLink to={RouteConfig.Home} end className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to={RouteConfig.About} end className={styles.navLink}>
        About
      </NavLink>
    </div>
  );
};
