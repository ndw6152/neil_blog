import './index.scss';

import React from 'react';
import { Button, ButtonVariant } from './Button';
import { useTheme } from './contexts/ThemeContext';
import styles from './App.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, RouteConfig } from './NavBar';

const App: React.FC = () => {
  const { theme, themeConfig, toggleTheme, typography } = useTheme();

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

          <Button
            title={theme}
            onClick={toggleTheme}
            variant={ButtonVariant.Primary}
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
