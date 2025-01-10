import './index.scss';

import React from 'react';
import { Button, ButtonVariant } from './Button';
import { useTheme } from './contexts/ThemeContext';
import styles from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, RouteConfig } from './NavBar';
import buttonStyles from './Button.module.scss';

import Toggle from './assets/toggle.svg';

const App: React.FC = () => {
  const { themeConfig, toggleTheme, typography } = useTheme();

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        {/* Header */}
        <header className={styles.header}>
          <div
            style={{
              color: themeConfig.tertiary10,
              fontSize: typography.h1,
            }}
          >
            Neil D. WHC
          </div>

          <NavBar />

          <Toggle
            className={buttonStyles.tertiary}
            onClick={toggleTheme}
            width={30}
            height={30}
            fill={themeConfig.tertiary10}
          />
        </header>

        {/* Main content container */}
        <div className={styles.mainContainer}>
          <Routes>
            <Route
              path={RouteConfig.Home}
              element={
                <div
                  style={{
                    color: themeConfig.tertiary20,
                    fontSize: typography.body,
                  }}
                >
                  HOME, React with TypeScript and Webpack!
                </div>
              }
            />
            <Route
              path={RouteConfig.About}
              element={
                <div
                  style={{
                    color: themeConfig.tertiary20,
                    fontSize: typography.body,
                  }}
                >
                  ABOUT
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div
            style={{
              color: themeConfig.tertiary20,
              fontSize: typography.subtitle,
            }}
          >
            Footer content goes here.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
