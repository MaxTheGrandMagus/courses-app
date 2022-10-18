import React, { ForwardedRef, forwardRef } from 'react';
import { CardProps } from './card.props';
import styles from './card.module.css';
import classnames from 'classnames';

export const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  return <div 
    className={classnames(styles.card, className, {
      [styles.blue]: color == 'blue',
    })}
    ref={ref}
    {...props}
  >
    {children}
  </div>;
});
Card.displayName = 'Card';
