import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { Product } from 'types/Product';
import { AddToCartButton } from 'components/AddToCartButton';
import styles from 'components/ProductCard/ProductCard.module.scss';

type ProductCardProps = {
  product: Product
};

export const ProductCard: FC<ProductCardProps> = ({ product }): ReactElement => {
  const { url: imageUrl, name, description, price } = product;

  return (
    <div className={styles.block}>
      <div className={styles.imageWrapper}>
        <Image
          alt={name}
          className={styles.image}
          height={100}
          src={imageUrl}
          width={150}
        />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.priceSection}>
        Price:&nbsp;${price}
      </p>
      <div className={styles.addToCartButtonWrapper}>
        <AddToCartButton product={product}/>
      </div>
    </div>
  );
};
