import { CSSProperties, FC, ReactElement, createContext } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
}

export const ProductCard: FC<Props> = ({ children, product, className = "", style, onChange }: Props): JSX.Element => {
    // Pasando la funcion al Custom Hook
    const { counter, increaseBy } = useProducts({ onChange, product });
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className} `} style={style}>
                {children}
            </div>
        </Provider>
    );
};
