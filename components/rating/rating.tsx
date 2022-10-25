import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';
import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import classnames from 'classnames';
import StarIcon from './star.svg';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, error, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<Array<JSX.Element>>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, tabIndex]);

  const computeFocus = (rating: number, index: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && index === 0) {
      return tabIndex ?? 0;
    }
    if (rating === index + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <span
          className={classnames(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          ref={refEl => ratingArrayRef.current?.push(refEl)}
        >
          <StarIcon />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleKey = (event: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (event.code === 'ArrowRight' || event.code === 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        event.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (event.code === 'ArrowLeft' || event.code === 'ArrowDown') {
      event.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div 
      ref={ref} 
      className={classnames(styles.ratingWrapper, {
        [styles.error]: error,
      })}
      {...props} 
    >
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});
Rating.displayName = 'Rating';
