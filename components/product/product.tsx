import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { ProductProps } from './product.props';
import styles from './product.module.css';
import classnames from 'classnames';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = React.useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 }
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} ref={ref} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image 
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span><span className='visualyHidden'>цена</span>{priceRu(product.price)}</span>
          {product.oldPrice && 
            <Tag color='green' className={styles.oldPrice}>
              <span className='visualyHidden'>скидка</span>
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          }
        </div>
        <div className={styles.credit}>
          <span className='visualyHidden'>кредит</span>
          {priceRu(product.credit)}/<span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <span className='visualyHidden'>{"рейтинг" + (product.reviewAvg ?? product.initialRating)}</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(c => (
            <Tag key={c} color='ghost' size='s' className={styles.category}>{c}</Tag>
          ))}
        </div>
        <div className={styles.priceTitle} aria-hidden={true}>цена</div>
        <div className={styles.creditTitle} aria-hidden={true}>кредит</div>
        <div className={styles.ratingTitle}>
          <a href='#reviews' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.features}>
          {product.characteristics.map(c => (
            <div key={c.name} className={styles.characteristics}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && <div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>}
          {product.disadvantages && <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>}
        </div>
        <Divider className={classnames(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button 
            appearance={'ghost'} 
            arrow={isReviewOpened ? 'down' : 'right'} 
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
        <Card 
          color='blue' 
          className={styles.reviews}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} isOpened={isReviewOpened} />
        </Card>
      </motion.div>
    </div>
  );
}));
Product.displayName = 'Product';
