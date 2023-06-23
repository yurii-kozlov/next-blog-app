'use client';

import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import * as postsActions from 'store/slices/Posts';
import styles from 'components/PostsSearch/PostsSearch.module.scss';

export const PostsSearch = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(postsActions.getPostsBySearch(searchQuery));
  }

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <form
        action="#"
        className={styles.form}
        method="get"
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          onChange={handleSearchQueryChange}
          placeholder="search"
          type="search"
          value={searchQuery}
        />
        <button className={styles.button} type="submit">Search</button>
      </form>
    </>
  );
};
