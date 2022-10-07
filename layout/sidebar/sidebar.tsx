import React from 'react';
import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';
import classnames from 'classnames';
import { Menu } from '../menu/menu';

export const Sidebar = ({ ...props }: SidebarProps):JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
