'use client';

import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { actions as cartActions } from 'store/slices/Cart';
import styles from 'components/Cart/CartItem/CartItem.module.scss';

type CartItemProps = {
  imageUrl: string;
  slug: string;
  name: string;
};

export const CartItem: FC<CartItemProps> = ({ imageUrl, slug, name }): ReactElement => {
  const productsQuantities = useAppSelector((state) => state.cartSlice.productsQuantities);

  const dispatch = useAppDispatch();

  const deleteProductFromCart = (): void => {
    dispatch(cartActions.deleteProductFromCart(slug));
  }


  return (
    <li className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          alt={name}
          height={40}
          src={imageUrl}
          width={50}
        />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.deleteFromCartAndProductQuantityWrapper}>
        <button
          className={styles.deleteFromCartButton}
          onClick={deleteProductFromCart}
          type="button"
        >
          <FontAwesomeIcon
            className={styles.icon} icon={faXmark}/>
        </button>
        <p className={styles.quantity}>Q-ty:{productsQuantities[slug]}</p>
      </div>
    </li>
  );
};
