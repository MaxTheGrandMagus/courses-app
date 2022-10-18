import React from 'react';
import { ReviewFormProps } from './review-form.props';
import styles from './review-form.module.css';
import classnames from 'classnames';
import { Input } from '../input/input';
import { Rating } from '../rating/rating';
import { Textarea } from '../textarea/textarea';
import { Button } from '../button/button';
import CloseIcon from '../../assets/icons/cross-green.svg';
import { useForm, Controller } from 'react-hook-form';

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps):JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div 
        className={classnames(styles.reviewForm, className)} 
        {...props}
      >
        <Input 
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          error={errors.name} 
          placeholder='Имя'
        />
        <Input 
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          error={errors.title}
          placeholder='Заголовок отзыва' 
          className={styles.title} 
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name='rating'
            render={({ field }) => (
              <Rating ref={field.ref} isEditable rating={field.value} setRating={field.onChange} />
            )}
          />
        </div>
        <Textarea 
          {...register('description', { required: { value: true, message: 'Заполните описание' } })}
          error={errors.description} 
          placeholder='Текст отзыва' 
          className={styles.description} 
        />
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
    </form>
  );
};
