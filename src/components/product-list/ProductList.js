import React from "react"
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux";

export const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({wishlist, cart}))
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product));
    };
    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishList(product));
    };
    return (
        <div>
            {products.map(product => (
                <ProductItem
                    isAddedtoWishlist={!!wishlist.find(({id}) => (id === product.id))}
                    isAddedtoCart={!!cart.find(({id}) => (id === product.id))}
                    onAddToCart={onAddToCart}
                    onAddToWishList={onAddToWishList} product={product} key={product.id}/>
            ))}

        </div>

    );
}