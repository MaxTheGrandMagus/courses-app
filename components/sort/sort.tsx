/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { SortEnum, SortProps } from './sort.props';
import styles from './sort.module.css';
import classnames from 'classnames';
import SortIcon from '../../assets/icons/sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps):JSX.Element => {
  return (
    <div className={classnames(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">Сортировка</div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={classnames(styles.sortButton, {
          [styles.active]: sort === SortEnum.Rating
        })}
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={classnames(styles.sortButton, {
          [styles.active]: sort === SortEnum.Price
        })} 
        aria-selected={sort === SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />По цене
      </button>
    </div>
  );
};
