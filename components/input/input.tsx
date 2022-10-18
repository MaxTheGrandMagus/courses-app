import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './input.props';
import styles from './input.module.css';
import classnames from 'classnames';

export const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
  return (
    <input className={classnames(className, styles.input)} ref={ref} {...props} />
  );
});
Input.displayName = 'Input';
