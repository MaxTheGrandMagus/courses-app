import React from 'react';
import { TagProps } from './tag.props';
import styles from './tag.module.css';
import classnames from 'classnames';

export const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: TagProps):JSX.Element => {
  return <div 
    className={classnames(styles.tag, className, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.ghost]: color == 'ghost',
      [styles.red]: color == 'red',
      [styles.grey]: color == 'grey',
      [styles.green]: color == 'green',
      [styles.primary]: color == 'primary',
    })}
    {...props}
  >
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>;
};
