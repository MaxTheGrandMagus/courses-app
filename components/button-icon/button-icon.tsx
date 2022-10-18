import React from 'react';
import { ButtonIconProps, icons } from './button-icon.props';
import styles from './button-icon.module.css';
import classnames from 'classnames';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps):JSX.Element => {
  const IconComponent = icons[icon];
  return (
    <button 
      className={classnames(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white',
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
