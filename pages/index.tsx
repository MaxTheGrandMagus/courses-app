import type { NextPage } from 'next';
import React from 'react';
import { Button, Heading, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/layout';

const Home: NextPage = (): JSX.Element => {
  const [rating, setRating] = React.useState<number>(4);
  return (
    <>
      <Heading tag='h1'>Текст</Heading>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <Paragraph size='s'>Маленький</Paragraph>
      <Paragraph size='m'>Средний</Paragraph>
      <Paragraph size='l'>Большой</Paragraph>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
