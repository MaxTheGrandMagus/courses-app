import React, { useEffect, useState } from 'react';
import { HeaderProps } from './header.props';
import styles from './header.module.css';
import classnames from 'classnames';
import Logo from '../../assets/icons/logo-name.svg';
import { ButtonIcon } from '../../components/button-icon/button-icon';
import { motion } from 'framer-motion';
import { Sidebar } from '../sidebar/sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps):JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={classnames(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
      <motion.div 
        className={styles.mobileMenu}
        variants={variants}
        initial='closed'
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
      </motion.div>
    </header>
  );
};
