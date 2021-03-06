import { cartActionsType } from './cart.types'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionsType.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionsType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        
        case cartActionsType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        
        case cartActionsType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
            
        case cartActionsType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        
        case cartActionsType.SET_USER_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }           
        default:
            return state

    }
}

export default cartReducer