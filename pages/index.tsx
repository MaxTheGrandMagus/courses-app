import type { NextPage } from 'next';
import { Button, Heading, Paragraph } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Heading tag='h1'>Текст</Heading>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <Paragraph size='s'>Маленький</Paragraph>
      <Paragraph size='m'>Средний</Paragraph>
      <Paragraph size='l'>Большой</Paragraph>
    </>
  );
};

export default Home;
