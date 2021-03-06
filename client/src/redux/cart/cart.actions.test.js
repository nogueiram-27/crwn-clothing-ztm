import { cartActionsType } from './cart.types'
import * as cartActions from './cart.actions'

describe ('cartActions', () => {
    it ('toogleCartHidden: should create an action to toogle hidden value', () => {
        const expectedAction = {
            type: cartActionsType.TOOGLE_CART_HIDDEN
        }
        expect(cartActions.toogleCartHidden()).toEqual(expectedAction)
    })

    it ('addItem: should create an action to add item to cart', () => {
        const mockItem = {
            id: 1,
            price: 100
        }

        const expectedAction = {
            type: cartActionsType.ADD_ITEM,
            payload: mockItem
        }
        expect(cartActions.addItem(mockItem)).toEqual(expectedAction)
    })

    it ('clearItem: should create an action to clear item from cart', () => {
        const mockItem = {
            id: 1,
            price: 100
        }

        const expectedAction = {
            type: cartActionsType.CLEAR_ITEM_FROM_CART,
            payload: mockItem
        }
        expect(cartActions.clearItem(mockItem)).toEqual(expectedAction)
    })

    it ('removeItem: should create an action to remove item from cart', () => {
        const mockItem = {
            id: 1,
            price: 100
        }

        const expectedAction = {
            type: cartActionsType.REMOVE_ITEM,
            payload: mockItem
        }
        expect(cartActions.removeItem(mockItem)).toEqual(expectedAction)
    })

    it ('clearCart: should create an action to clear cart', () => {
        const expectedAction = {
            type: cartActionsType.CLEAR_CART
        }
        expect(cartActions.clearCart()).toEqual(expectedAction)
    })

    it ('checkoutCart: should create an action to checkout cart', () => {
        const mockCartItems = [{ id: 1, price: 100 }, { id: 2 , price: 200 } ]
        const expectedAction = {
            type: cartActionsType.CHECK_OUT_CART,
            payload: mockCartItems
        }
        expect(cartActions.checkoutCart(mockCartItems)).toEqual(expectedAction)
    })

    it ('setUserCartItems: should create an action to set user cart items in bd', () => {
        const mockCartItems = [{ id: 1, price: 100 }, { id: 2 , price: 200 } ]
        const expectedAction = {
            type: cartActionsType.SET_USER_CART_ITEMS,
            payload: mockCartItems
        }
        expect(cartActions.setUserCartItems(mockCartItems)).toEqual(expectedAction)
    })

    it ('updateUserCartItems: should create an action to update user cart items in bd', () => {
        const expectedAction = {
            type: cartActionsType.UPDATE_USER_CART_ITEMS
        }
        expect(cartActions.updateUserCartItems()).toEqual(expectedAction)
    })

    it ('cleanUserCartItems: should create an action to clean user cart items in bd', () => {
        const expectedAction = {
            type: cartActionsType.CLEAN_USER_CART_ITEMS
        }
        expect(cartActions.cleanUserCartItems()).toEqual(expectedAction)
    })
})
