import React from 'react';
import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import classnames from 'classnames';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

const Layout = ({ children }: LayoutProps):JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};