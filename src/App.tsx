import './index.scss';

import React from 'react';
import { Button, ButtonVariant } from './Button';
import { useTheme } from './contexts/ThemeContext';
import styles from './App.module.scss';

const App: React.FC = () => {
  const { theme, themeConfig, toggleTheme, typography } = useTheme();

  return (
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
        <Button
          title={theme}
          onClick={toggleTheme}
          variant={ButtonVariant.Primary}
        />
      </header>

      {/* Main content container */}
      <div className={styles.mainContainer}>
        <div
          style={{ color: themeConfig.tertiary20, fontSize: typography.body }}
        >
          Hello, React with TypeScript and Webpack!
        </div>
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
  );
};

export default App;
