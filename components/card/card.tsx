import React from 'react';
import { CardProps } from './card.props';
import styles from './card.module.css';
import classnames from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: CardProps):JSX.Element => {
  return <div 
    className={classnames(styles.card, className, {
      [styles.blue]: color == 'blue',
    })} 
    {...props}
  >
    {children}
  </div>;
};
