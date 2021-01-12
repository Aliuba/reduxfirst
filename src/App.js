import React, {useCallback, useEffect} from "react"
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {setProducts} from "./redux"
import {ProductList} from "./components/product-list";

function App() {

    const {cart, wishlist, products} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
            cart,
            wishlist,
            products
        })
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts())
    }, [dispatch]);


    return (
        <div className="App">
            <Header />
            {/*products це масив і це смішно key={products.id}*/}
            {/*<ProductList key={products.id} products={products}/>*/}
            <ProductList products={products}/>
        </div>
    );
}

export default App;
