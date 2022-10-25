import React, { ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './textarea.props';
import styles from './textarea.module.css';
import classnames from 'classnames';

export const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
  return (
    <div className={classnames(styles.textareaWrapper, className)}>
      <textarea 
        className={classnames(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
Textarea.displayName = 'Textarea';
