import './index.scss';

import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  const { theme, themeConfig, toggleTheme, typography, spacing } = useTheme();

  return (
    <div
      className="app-container"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: themeConfig.secondary10, // Example background change for theme
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: spacing.s20,
          backgroundColor: themeConfig.secondary15,
        }}
      >
        <text
          style={{
            color: themeConfig.tertiary10,
            fontSize: typography.h1,
          }}
        >
          Hello World
        </text>
        <PrimaryButton title={theme} onClick={toggleTheme} />
      </header>

      {/* Main content container */}
      <div className="container" style={{ textAlign: 'center', flex: 1 }}>
        <text
          style={{ color: themeConfig.tertiary20, fontSize: typography.body }}
        >
          Hello, React with TypeScript and Webpack!
        </text>

        <SecondaryButton title="Secondary" onClick={toggleTheme} />
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
          backgroundColor: themeConfig.secondary15,
        }}
      >
        <text
          style={{
            color: themeConfig.tertiary20,
            fontSize: typography.subtitle,
          }}
        >
          Footer content goes here.
        </text>
      </footer>
    </div>
  );
};

export default App;
