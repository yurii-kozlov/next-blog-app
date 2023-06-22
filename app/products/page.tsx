import ProductsService from 'services/ProductsService';
import { ProductCard } from 'components/ProductCard';
import { Container } from 'components/Container';
import styles from 'styles/pages/Products.module.scss';

export const revalidate = 60;

export default async function Products() {
  const products = await ProductsService.getProducts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Products</h1>
      <Container>
      <div className={styles.block}>
        {products.map((product) => {
          const { name, url, description, slug} = product;
          return (
            <ProductCard key={slug} product={product}/>
          )
        })}
      </div>
      </Container>
    </div>
  )
}