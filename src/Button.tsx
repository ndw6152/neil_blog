import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
  Primary,
  Secondary,
  Tertiary,
}

interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = ButtonVariant.Primary,
  onClick,
}) => {
  const variantClass = {
    [ButtonVariant.Primary]: styles.primary,
    [ButtonVariant.Secondary]: styles.secondary,
    [ButtonVariant.Tertiary]: styles.tertiary,
  }[variant];

  return (
    <button className={variantClass} onClick={onClick}>
      {title}
    </button>
  );
};
