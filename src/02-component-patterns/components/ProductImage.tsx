import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "../context/ProductContext";

interface Props {
    img?: string;
    className?: string;
}

export const ProductImage = ({ img = "", className = "" }: Props) => {
    const { product } = useContext(ProductContext);
    let showImag: string;

    if (img) {
        showImag = img;
    } else if (product.img) {
        showImag = product.img;
    } else {
        showImag = noImage;
    }

    return <img src={showImag} alt="coffee-mug" className={`${styles.productImg} ${className ? className : ""}`} />;
};
