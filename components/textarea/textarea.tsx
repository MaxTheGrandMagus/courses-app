import React from 'react';
import { TextareaProps } from './textarea.props';
import styles from './textarea.module.css';
import classnames from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps):JSX.Element => {
  return <textarea 
    className={classnames(className, styles.textarea)} 
    {...props}
  />;
};
