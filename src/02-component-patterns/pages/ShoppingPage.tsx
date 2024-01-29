import { useState } from "react";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
};

const product2 = {
    id: "2",
    title: "Coffee Mug - Meme",
    img: "./coffeemug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
    count: number;
}

const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = () => {
        console.log("onProductCountChange");
    };

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark"
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-while" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                <ProductCard
                    product={product}
                    className="bg-dark text-while"
                    style={{ width: "120px" }}
                    onChange={onProductCountChange}
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard
                    product={product2}
                    className="bg-dark text-while"
                    style={{ width: "120px" }}
                    onChange={onProductCountChange}
                >
                    <ProductImage className="custom-image" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
            </div>
        </div>
    );
};
export default ShoppingPage;
