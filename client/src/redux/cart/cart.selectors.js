import { createSelector } from 'reselect';

//input selector
const selectCart = (state) => state.cart;

// memoize selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
        0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedTotal, cartItem) =>
        accumulatedTotal + cartItem.quantity * cartItem.price,
    0
    )
)