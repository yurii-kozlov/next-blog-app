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
        className={styles.form}
        method="get"
        action="#"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className={styles.input}
          placeholder="search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </>
  );
};
