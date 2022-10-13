import React from 'react';
import { AdvantagesProps } from './advantages.props';
import styles from './advantages.module.css';
import CheckIcon from '../../assets/icons/checkbox.svg';

export const Advantages = ({ advantages }: AdvantagesProps):JSX.Element => {
  return (
    <>
      {advantages && advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div className={styles.description}>{a.description}</div>
        </div>
      ))} 
    </>
  );
};
