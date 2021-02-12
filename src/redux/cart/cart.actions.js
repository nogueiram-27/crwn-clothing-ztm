import { cartActionsType } from './cart.types'

export const toogleCartHidden = () => ({
    type: cartActionsType.TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionsType.ADD_ITEM,
    payload: item
})