import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => acc + item.price, 0);
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const products = [
        {id: 1, title: 'Product 1', description: 'Description 1', price: 100},
        {id: 2, title: 'Product 2', description: 'Description 2', price: 200},
        {id: 3, title: 'Product 3', description: 'Description 3', price: 300},
        {id: 4, title: 'Product 4', description: 'Description 4', price: 400},
        {id: 5, title: 'Product 5', description: 'Description 5', price: 500},
        {id: 6, title: 'Product 6', description: 'Description 6', price: 600},
        {id: 7, title: 'Product 7', description: 'Description 7', price: 700},
        {id: 8, title: 'Product 8', description: 'Description 8', price: 800},
        {id: 9, title: 'Product 9', description: 'Description 9', price: 900},
        {id: 10, title: 'Product 10', description: 'Description 10', price: 1000},
    ];

    const onAddHandler = (product) => {
        const alreadyAdded = addedItems.find(p => p.id === product.id);
        let newItems  = []


        if (alreadyAdded) {
            newItems = addedItems.filter(p => p.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
                color: '#000000',
                textColor: '#FFFFFF',
            });
        }
    }
   
    return (
        <div className="list">
            {products.map((product) => (
                <ProductItem 
                    key={product.id}
                    product={product} 
                    onAdd={onAddHandler} 
                    className="item" 
                />
            ))}
        </div>
    )
}

export default ProductList;
