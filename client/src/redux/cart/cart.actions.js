import { cartActionsType } from './cart.types'

export const toogleCartHidden = () => ({
    type: cartActionsType.TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionsType.ADD_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: cartActionsType.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionsType.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: cartActionsType.CLEAR_CART
})

export const checkoutCart = (cartItems) => ({
    type: cartActionsType.CHECK_OUT_CART,
    payload: cartItems
})

export const setUserCartItems = (cartItems) => ({
    type: cartActionsType.SET_USER_CART_ITEMS,
    payload: cartItems
})

export const updateUserCartItems = () => ({
    type: cartActionsType.UPDATE_USER_CART_ITEMS,
})

export const cleanUserCartItems = () => ({
    type: cartActionsType.CLEAN_USER_CART_ITEMS,
})