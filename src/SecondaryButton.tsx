// src/components/ThemedButton.tsx

import React, { MouseEventHandler } from 'react';
import { useTheme } from './contexts/ThemeContext';

// Button props interface
interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SecondaryButton: React.FC<ButtonProps> = ({ title, onClick }) => {
  const { themeConfig } = useTheme();

  // Style the button based on the current theme
  const buttonStyle = {
    backgroundColor: themeConfig.secondary10,
    color: themeConfig.primary,
    border: `solid 2px ${themeConfig.primary}`,
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default SecondaryButton;
