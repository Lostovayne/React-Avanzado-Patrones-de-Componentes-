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

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        setShoppingCart((oldShoppingCart) => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} className="bg-dark" onChange={onProductCountChange}>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-while" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                {shoppingCart && Object.keys(shoppingCart).length > 0 ? (
                    Array.from(Object.entries(shoppingCart)).map(([key, value]) => (
                        <ProductCard
                            key={key}
                            product={value}
                            className="bg-dark text-while"
                            style={{ width: "120px" }}
                            onChange={onProductCountChange}
                            value={value.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{ display: "flex", justifyContent: "center" }}
                            />
                        </ProductCard>
                    ))
                ) : (
                    <p>Cart is empty</p>
                )}
            </div>

            <div>
                <code>
                    <pre>{JSON.stringify(shoppingCart, null, 2)}</pre>
                </code>
            </div>
        </div>
    );
};
export default ShoppingPage;
