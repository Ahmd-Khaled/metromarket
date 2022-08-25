import { useEffect, useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        // localStorage.setItem('storedItems', updatedItems);
        // localStorage.setItem('storedTotalAmount', updatedTotalAmount);

        // console.log((localStorage.getItem('storedItems')).amount);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    // ---------New--------------------------
    if (action.type === 'REMOVEPRODUCT') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - ((existingCartItem.amount)*(existingCartItem.price));

        const updatedItems = state.items.filter(item => item.id !== action.item.id);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const removeProductItemsFromCartHandler = (item) => {
        dispatchCartAction({ type: 'REMOVEPRODUCT', item: item });
    };

    // useEffect(() => {
    //     window.localStorage.setItem('storedItems',  JSON.stringify(cartState.items));
    //     window.localStorage.setItem('storedtotalAmount',  JSON.stringify(cartState.totalAmount));
    // }, [cartState]);


    // const cartContext = {
    //     items:  JSON.parse(localStorage.getItem('storedItems')),
    //     totalAmount:  JSON.parse(localStorage.getItem('storedtotalAmount')),
    //     addItem: addItemToCartHandler,
    //     removeItem: removeItemFromCartHandler,
    //     removeProduct: removeProductItemsFromCartHandler,
    // };

    // console.log(localStorage.getItem('storedItems'));
    // console.log(localStorage.getItem('storedtotalAmount'));

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        removeProduct: removeProductItemsFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;
