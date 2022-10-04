import type { NextPage } from 'next';
import { Button, Heading } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Heading tag='h1'>Текст</Heading>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
};

export default Home;
