import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import classnames from 'classnames';
import StarIcon from './star.svg';

export const Rating = forwardRef(({ isEditable = false, rating, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<Array<JSX.Element>>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

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
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, event)}
          />
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

  const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
    if (event.code !== 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props} ref={ref}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
});
Rating.displayName = 'Rating';
