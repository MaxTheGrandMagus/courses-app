import React, { useEffect, useReducer } from 'react';
import { TopPageComponentProps } from './top-page-component.props';
import styles from './top-page-component.module.css';
import { Advantages, Heading, HhData, Product, Sort, Tag } from '../../components';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/sort/sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag='h1'>{page.title}</Heading>
        {products && 
          <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>
            {products.length}
          </Tag>
        }
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div className={styles.products} role='list'>
        {sortedProducts && sortedProducts.map(p => (
          <Product layout key={p._id} product={p} role='listitem' />
        ))}
      </div>
      
      <div className={styles.hhTitle}>
        <Heading tag='h2'>Вакансии - {page.category}</Heading>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && 
        <>
          <Heading tag='h2'>Преимущества</Heading>
          <Advantages advantages={page.advantages} />
        </>
      }

      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      <Heading tag='h2'>Получаемые навыки</Heading>
      
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  );
};
