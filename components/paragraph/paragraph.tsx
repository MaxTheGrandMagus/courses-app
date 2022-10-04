import React from 'react';
import { ParagraphProps } from './paragraph.props';
import styles from './paragraph.module.css';
import classnames from 'classnames';

export const Paragraph = ({ size = 'm', children, className, ...props }: ParagraphProps):JSX.Element => {
  return <p 
    className={classnames(styles.p, className, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.l]: size == 'l',
    })} 
    {...props}
  >
    {children}
  </p>;
};
