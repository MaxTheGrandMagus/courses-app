import React from 'react';
import { ButtonProps } from './button.props';
import styles from './button.module.css';
import classnames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, children, arrow = 'none', className, ...props }: ButtonProps):JSX.Element => {
  return (
    <button 
      className={classnames(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && 
        <span 
          className={classnames(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      }
    </button>
  );
};
