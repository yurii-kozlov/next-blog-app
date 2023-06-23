'use client'

import { FC, ReactElement } from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getProductSum } from 'store/selectors/cartSelectors';
import { PayloadAction } from '@reduxjs/toolkit';
import getStripe from 'helpers/getStripe';
import { actions as cartActions} from 'store/slices/Cart';
import { CartItem } from 'components/Cart/CartItem';
import styles from 'components/Cart/Cart.module.scss';

type CartProps = {
  isCartVisible: boolean;
}

export const Cart: FC<CartProps> = ({ isCartVisible }): ReactElement => {
  const totalOrderSum = useAppSelector(getProductSum);
  const productsInCart = useAppSelector((state) => state.cartSlice.addedProducts);
  const productsQuantities = useAppSelector((state) => state.cartSlice.productsQuantities);

  const dispatch = useAppDispatch();

  const clearCart = (): PayloadAction<void> => dispatch(cartActions.clearCart());

  const redirectToCheckout = async (): Promise<void> => {
    const {
      data: { id }
    } = await axios.post('/api/checkout_sessions', {
      items: productsInCart.map((product) => ({
        price: product.id,
        quantity: productsQuantities[product.slug]
      }))
    });

    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId: id });
  }

  return (
    <div
      className={cn(
        styles.wrapper,
        { [styles.wrapperActive]: isCartVisible }
      )}>
      <h1 className={styles.title}>Cart</h1>
      {productsInCart.length === 0 ? (
        <p className={styles.emptyCartDescription}>Your cart is empty</p>
      ) : (
        <div className={styles.contentWrapper}>
          <ul className={styles.productsList}>
            {productsInCart.map((product) => {
              const { slug, name, url } = product;

              return (
                <CartItem
                  imageUrl={url}
                  key={slug}
                  name={name}
                  slug={slug}
                />
              )
            })}
          </ul>
          <p className={styles.totalOrderSum}>Total order sum: ${totalOrderSum}</p>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.clearCartButton}
              onClick={clearCart}
              type="button"
            >
              Clear cart
            </button>
            <button
              className={styles.proceedToCheckoutLink}
              onClick={redirectToCheckout}
              type="button"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
