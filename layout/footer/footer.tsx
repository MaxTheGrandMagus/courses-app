import React from 'react';
import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import classnames from 'classnames';

export const Footer = ({ ...props }: FooterProps):JSX.Element => {
  return (
    <footer {...props}>
      Footer
    </footer>
  );
};
