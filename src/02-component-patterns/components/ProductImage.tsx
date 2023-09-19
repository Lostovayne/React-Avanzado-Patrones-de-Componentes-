import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
    let showImag: string;

    if (img) {
        showImag = img;
    } else if (product.img) {
        showImag = product.img;
    } else {
        showImag = noImage;
    }

    return <img src={showImag} alt='coffee-mug' className={styles.productImg} />;
};
