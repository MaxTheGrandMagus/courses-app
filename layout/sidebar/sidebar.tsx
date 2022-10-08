import React from 'react';
import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';
import classnames from 'classnames';
import { Menu } from '../menu/menu';
import Logo from '../../assets/icons/logo-name.svg';

export const Sidebar = ({ className, ...props }: SidebarProps):JSX.Element => {
  return (
    <div className={classnames(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
