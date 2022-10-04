import React from 'react';
import { HeadingProps } from './heading.props';
import styles from './heading.module.css';

export const Heading = ({ tag, children, ...props }: HeadingProps):JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={styles.h4} {...props}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.h5} {...props}>{children}</h5>;
    case 'h6':
      return <h6 className={styles.h6} {...props}>{children}</h6>;
    default:
      return <></>;
  }
};
