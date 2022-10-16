import React from 'react';
import { ProductProps } from './product.props';
import styles from './product.module.css';
import { Card } from '../card/card';
import { Rating } from '../rating/rating';
import { Button, Divider, Tag } from '..';
import { declOfNum, priceRu } from '../../helpers/helpers';
import Image from 'next/image';

export const Product = ({ product, className, ...props }: ProductProps):JSX.Element => {
  return (
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
        {priceRu(product.price)}
        {product.oldPrice && 
          <Tag color='green' className={styles.oldPrice}>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        }
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(c => (
          <Tag key={c} color='ghost' size='s' className={styles.category}>{c}</Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.ratingTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
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
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance={'primary'}>Узнать подробнее</Button>
        <Button appearance={'ghost'} arrow={'right'}>Читать отзывы</Button>
      </div>
    </Card>
  );
};
