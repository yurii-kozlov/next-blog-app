'use client';

import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import * as postsActions from '@/store/slices/Posts';
import Link from 'next/link';
import styles from 'components/Posts/Posts.module.scss';

export const Posts = (): ReactElement => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postsSlice.posts);
  const isLoading = useAppSelector((state) => state.postsSlice.isLoading);

  useEffect(() => {
    dispatch(postsActions.getPosts());
  }, [])

  return isLoading ? (
    <h3 className={styles.loadingInfo}>Loading...</h3>
  ): (
    <ul className={styles.postsList}>
      {posts.length === 0 ? (
        <h4 className={styles.postsInfo}>
          Unfortunately, there are no posts with the indicated search query.
          <br />
          Please change the search query.
        </h4>
      ) : (
        posts.map((post) => {
          const {id, title } = post;
          return (
            <li key={id} className={styles.postsListItem}>
              <Link className={styles.postsListItemLink} href={`/blog/${id}`}>
                {title}
              </Link>
            </li>
            )
        })
      ) }
  </ul>
  );
};
