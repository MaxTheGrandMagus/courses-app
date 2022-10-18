import React, { ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './textarea.props';
import styles from './textarea.module.css';
import classnames from 'classnames';

export const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
  return (
    <textarea 
      className={classnames(className, styles.textarea)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';
