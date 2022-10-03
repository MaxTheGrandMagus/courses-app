import type { NextPage } from 'next';
import { Heading } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Heading tag='h1'>Текст</Heading>
    </div>
  );
};

export default Home;
