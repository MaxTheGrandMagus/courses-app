import React, { useEffect } from 'react';
import styles from './up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '../button-icon/button-icon';

export const Up = ():JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({
      opacity: y / document.body.scrollHeight,
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div 
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance='primary' icon='up' aria-label="Наверх" onClick={scrollToTop} />
    </motion.div>
  );
};
