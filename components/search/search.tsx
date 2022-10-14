import React, { useState } from 'react';
import { SearchProps } from './search.props';
import styles from './search.module.css';
import classnames from 'classnames';
import { Input } from '../input/input';
import { Button } from '../button/button';
import SearchIcon from '../../assets/icons/search.svg';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps):JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  
  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={classnames(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.searchButton}
        appearance='primary'
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
