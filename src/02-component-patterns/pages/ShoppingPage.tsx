import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
};

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product} className='bg-dark'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-while' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: '#70d1f8' }}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{ color: '#fff' }} />
                </ProductCard>
            </div>
        </div>
    );
};
export default ShoppingPage;
