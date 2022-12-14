import type { GetStaticProps } from 'next';
import React from 'react';
import { Button, Heading, Input, Paragraph, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
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
      <Input placeholder='Поиск' />
      <Textarea placeholder='Тест' />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}