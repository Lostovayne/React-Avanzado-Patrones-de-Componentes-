import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import { products } from "./../data/products";

const ShoppingPage = () => {
    // principal State

    const { onProductCountChange, shoppingCart } = useShoppingCart();

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
                        value={shoppingCart[product.id]?.count || 0}
                    >
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
        </div>
    );
};
export default ShoppingPage;
