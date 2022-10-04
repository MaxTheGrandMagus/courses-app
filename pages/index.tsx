import type { NextPage } from 'next';
import { Button, Heading, Paragraph, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
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
    </>
  );
};

export default Home;
