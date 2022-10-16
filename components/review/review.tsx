import React from 'react';
import { ReviewProps } from './review.props';
import styles from './review.module.css';
import UserIcon from '../../assets/icons/user.svg';
import classnames from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../rating/rating';

export const Review = ({ review, className, ...props }: ReviewProps):JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div 
      className={classnames(styles.review, className)} 
      {...props}
    >
      <UserIcon className={styles.userIcon} />
      <div className={styles.title}>
        <span className={styles.name}>{name}: </span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};
