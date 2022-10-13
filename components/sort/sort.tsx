import React from 'react';
import { SortEnum, SortProps } from './sort.props';
import styles from './sort.module.css';
import classnames from 'classnames';
import SortIcon from '../../assets/icons/sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps):JSX.Element => {
  return (
    <div className={classnames(styles.sort, className)} {...props}>
      <span 
        onClick={() => setSort(SortEnum.Rating)}
        className={classnames(styles.sortButton, {
          [styles.active]: sort === SortEnum.Rating
        })} 
      >
        <SortIcon className={styles.sortIcon} />По&nbsp;рейтингу
      </span>
      <span 
        onClick={() => setSort(SortEnum.Price)}
        className={classnames(styles.sortButton, {
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={styles.sortIcon} />По&nbsp;цене
      </span>
    </div>
  );
};
