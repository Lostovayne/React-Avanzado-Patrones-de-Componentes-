import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
// import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import { products } from "./../data/products";

const product = products[0];

const ShoppingPage = () => {
    // principal State

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard key={product.id} product={product} className="bg-dark" initialValues={{ count: 4, maxCount: 10 }}>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-while" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
        </div>
    );
};
export default ShoppingPage;
