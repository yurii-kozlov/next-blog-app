import { ReactElement } from 'react';
import { ProductCard } from 'components/ProductCard';
import { Container } from 'components/Container';
import { products } from 'data/products';
import styles from 'styles/pages/Products.module.scss';

export default function Products(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Products</h1>
      <Container>
        <div className={styles.block}>
          {products.map((product) => {
          const { slug} = product;

          return (
            <ProductCard key={slug} product={product}/>
          )
        })}
        </div>
      </Container>
    </div>
  )
}
