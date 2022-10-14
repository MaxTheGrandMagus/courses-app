import React from 'react';
import { ProductProps } from './product.props';
import styles from './product.module.css';
import classnames from 'classnames';

export const Product = ({ product, className, ...props }: ProductProps):JSX.Element => {
  return (
    <div 
      className={classnames(className, styles.product)} 
      {...props}
    >
      {product.title}
    </div>
  );
};
