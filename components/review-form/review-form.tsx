import React from 'react';
import { ReviewFormProps } from './review-form.props';
import styles from './review-form.module.css';
import classnames from 'classnames';
import { Input } from '../input/input';
import { Rating } from '../rating/rating';
import { Textarea } from '../textarea/textarea';
import { Button } from '../button/button';
import CloseIcon from '../../assets/icons/cross-green.svg';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps):JSX.Element => {
  return (
    <>
      <div 
        className={classnames(styles.reviewForm, className)} 
        {...props}
      >
        <Input placeholder='Имя'/>
        <Input placeholder='Заголовок отзыва' className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder='Текст отзыва' className={styles.description} />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className={styles.successDescription}>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.successClose} />
      </div>
    </>
  );
};
