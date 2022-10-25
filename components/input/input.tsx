import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './input.props';
import styles from './input.module.css';
import classnames from 'classnames';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
  return (
    <div className={classnames(className, styles.inputWrapper)}>
      <input 
        className={classnames(styles.input, {
          [styles.error]: error,
        })} 
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
Input.displayName = 'Input';
