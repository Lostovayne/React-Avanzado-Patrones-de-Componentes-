import { CSSProperties, FC, ReactElement } from "react";
import { ProductContext } from "../context/ProductContext";
import { useProducts } from "../hooks/useProducts";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard: FC<Props> = ({
    children,
    product,
    className = "",
    style,
    onChange,
    value,
    initialValues,
}: Props): JSX.Element => {
    // Pasando la funcion al Custom Hook
    const { counter, increaseBy } = useProducts({ onChange, product, value, initialValues });
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className} `} style={style}>
                {children}
            </div>
        </Provider>
    );
};
