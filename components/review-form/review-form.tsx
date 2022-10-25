import React, { useState } from 'react';
import { ReviewFormProps } from './review-form.props';
import styles from './review-form.module.css';
import classnames from 'classnames';
import { Input } from '../input/input';
import { Rating } from '../rating/rating';
import { Textarea } from '../textarea/textarea';
import { Button } from '../button/button';
import CloseIcon from '../../assets/icons/cross-green.svg';
import { useForm, Controller } from 'react-hook-form';
import { API } from '../../helpers/api';
import axios, { AxiosError } from 'axios';

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export interface IReviewSentResponse {
  message: string;
}

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps):JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }
    } catch (error) {
      setIsError((error as AxiosError).message);
    }
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
          tabIndex={isOpened ? 0 : -1}
        />
        <Input 
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          error={errors.title}
          placeholder='Заголовок отзыва' 
          className={styles.title}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating 
                isEditable 
                ref={field.ref} 
                rating={field.value} 
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea 
          {...register('description', { required: { value: true, message: 'Заполните описание' } })}
          error={errors.description} 
          placeholder='Текст отзыва' 
          className={styles.description}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && <div className={classnames(styles.success, styles.panel)}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className={styles.successDescription}>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.closeIcon} onClick={() => setIsSuccess(false)} />
      </div>}
      {isError && <div className={classnames(styles.error, styles.panel)}>
        Что-то пошло не так. Попробуйте отправить отзыв позже.
        <CloseIcon className={styles.closeIcon} onClick={() => setIsError(undefined)} />
      </div>}
    </form>
  );
};
