import React from 'react';
import { HeaderProps } from './header.props';
import styles from './header.module.css';
import classnames from 'classnames';

export const Header = ({ ...props }: HeaderProps):JSX.Element => {
  return (
    <header {...props}>
      Header
    </header>
  );
};
