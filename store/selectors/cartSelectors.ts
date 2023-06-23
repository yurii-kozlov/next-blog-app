import { createSelector } from 'reselect';
import { Product } from 'types/Product';
import { RootState } from 'store/store';
import { ProductsQuantities } from 'store/slices/Cart';

const getProducts = (state: RootState): Product[] => state.cartSlice.addedProducts;
const getProductsQuantities = (state: RootState): ProductsQuantities => state.cartSlice.productsQuantities;

export const getProductSum = createSelector(
  getProducts,
  getProductsQuantities,
  (products: Product[], productsQuantities: ProductsQuantities) =>
    products.reduce((sum, product) =>
      sum + product.price * productsQuantities[product.slug], 0)
);
