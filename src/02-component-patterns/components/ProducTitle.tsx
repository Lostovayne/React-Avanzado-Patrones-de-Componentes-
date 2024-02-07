import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

interface Props {
    className?: string;
}

export const ProductTitle = ({ className = '' }: Props) => {
    const { product } = useContext(ProductContext);
    return <span className={`${styles.productDescription} ${className ? className : ''}`}>{product.title}</span>;
};
