import React from "react";
import '../../App.css';
import {useSelector} from "react-redux";

export const Header = () => {
    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}))
    // назви функцій з маленької пишуться
    const total = (x) => x.reduce((alt, el) => (alt + el.price), 0)

    return (
        <header className="App-header">
            <h1>Hello in our shop</h1>
            <div>
                <div title={"cart: " + total(cart)}>cart: {cart.length} </div>
                <div title={"wishlist: " + total(wishlist)}>wishlist:{wishlist.length}</div>
            </div>
        </header>
    );
}
