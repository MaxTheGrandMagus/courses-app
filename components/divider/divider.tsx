import React from 'react';
import { DividerProps } from './divider.props';
import styles from './divider.module.css';
import classnames from 'classnames';

export const Divider = ({ className, ...props }: DividerProps):JSX.Element => {
  return (
    <hr className={classnames(className, styles.hr)} {...props} />
  );
};
