import React from "react"

export const ProductItem = (props) => {

    const {
        isAddedtoWishlist, isAddedtoCart,
        onAddToCart, onAddToWishList, product,
        product: {id, title, price, description}
    } = props

    return (
        <div key={id}>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            <button onClick={() => onAddToCart(product)}>{isAddedtoCart ? "remove" : "add to cart"}</button>
            <button onClick={() => onAddToWishList(product)}>{isAddedtoWishlist ? "remove" : "add to wishlist"}</button>
            <hr/>
        </div>
    )

}
