import React from 'react';
import { TopPageComponentProps } from './top-page-component.props';
import styles from './top-page-component.module.css';
import classnames from 'classnames';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
  return (
    <>
      {products && products.length}
    </>
  );
};
