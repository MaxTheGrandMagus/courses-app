import React from 'react';
import { InputProps } from './input.props';
import styles from './input.module.css';
import classnames from 'classnames';

export const Input = ({ className, ...props }: InputProps):JSX.Element => {
  return <input 
    className={classnames(className, styles.input)} 
    {...props}
  />;
};
