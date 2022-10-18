import React from 'react';
import { AdvantagesProps } from './advantages.props';
import styles from './advantages.module.css';
import CheckIcon from '../../assets/icons/check.svg';

export const Advantages = ({ advantages }: AdvantagesProps):JSX.Element => {
  return (
    <>
      {advantages && advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <div className={styles.advantageIcon}>
            <CheckIcon />
          </div>
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))} 
    </>
  );
};
