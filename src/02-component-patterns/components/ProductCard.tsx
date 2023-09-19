import { FC, createContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard: FC<ProductCardProps> = ({ children, product }: ProductCardProps): JSX.Element => {
    const { counter, increaseBy } = useProducts();
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>{children}</div>;
        </Provider>
    );
};

// ready
