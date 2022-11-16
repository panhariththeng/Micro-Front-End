import React, {useState, useEffect} from 'react';

import { getProducts, currency } from './products';

export default function HomeContent(){
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then(setProducts);

    }, []);

    return <div className=" grid grid-cols-4 gaps-5">
        {products.map((products) => (<div key = {products.id}>
            <img src = {products.image} alt = {products.name}/>
            <div className="flex-grow font-bold">
                <a>{products.name}</a>
            </div>
            <div className="flex-end">{currency.format(products.price)}</div>
            <div className="text-sm mt-4">{products.description}</div>
        </div>
        )) }
    </div>
}