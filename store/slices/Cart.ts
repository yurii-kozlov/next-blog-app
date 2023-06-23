import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/Product';

export type ProductsQuantities = {
  [slug: string] : number
}

export interface InitialState {
  addedProducts: Product[];
  isLoading: boolean;
  error: string | null;
  productsQuantities: ProductsQuantities
}

const initialState: InitialState = {
  addedProducts: [],
  error: null,
  isLoading: false,
  productsQuantities: {}
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const isProductAlreadyInCart = state.productsQuantities[action.payload.slug];

      if (isProductAlreadyInCart) {
        state.productsQuantities[action.payload.slug] += 1;

        return;
      }

      state.productsQuantities[action.payload.slug] = 1;
      state.addedProducts.push(action.payload);
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.addedProducts = state.addedProducts.filter((cartProduct) =>
        cartProduct.slug !== action.payload);
    },
    clearCart: (state) => {
      state.addedProducts = [];
    }
  }
});

export default cartSlice.reducer
export const { actions } = cartSlice;
