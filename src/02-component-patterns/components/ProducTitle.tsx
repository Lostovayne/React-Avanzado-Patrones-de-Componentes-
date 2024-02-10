import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "../context/ProductContext";

interface Props {
    className?: string;
}

export const ProductTitle = ({ className = "" }: Props) => {
    const { product } = useContext(ProductContext);
    return <span className={`${styles.productDescription} ${className ? className : ""}`}>{product.title}</span>;
};
