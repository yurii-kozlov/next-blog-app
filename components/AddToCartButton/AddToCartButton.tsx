'use client';

import { FC, ReactElement } from 'react';
import { Product } from 'types/Product';
import { useAppDispatch } from 'store/hooks';
import { actions as cartActions } from 'store/slices/Cart';
import styles from 'components/AddToCartButton/AddToCartButton.module.scss';

type AddToCartButtonProps = {
  product: Product
};

export const AddToCartButton: FC<AddToCartButtonProps> = ({ product }): ReactElement => {
  const dispatch = useAppDispatch();

  const addProductToCart = (): { payload: Product; type: 'cart/addProductToCart'; } =>
  dispatch(cartActions.addProductToCart(product));

  return (
    <button
      className={styles.button}
      onClick={addProductToCart}
      type="button"
    >
      Add to cart
    </button>
  );
};
