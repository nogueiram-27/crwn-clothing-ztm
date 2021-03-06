import { cartActionsType } from './cart.types'
import cartReducer from './cart.reducer'

const initialState = {
    hidden: true,
    cartItems : []
}

describe('cartReducer', () => {
    it('should return initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState)
    })

    it('should set hidden to false on toogleCartHidden', () => {
        
        expect(cartReducer(
            initialState,
            {
                type: cartActionsType.TOOGLE_CART_HIDDEN,
            }).hidden).toEqual(false)
    })

    it('should set hidden to true on toogleCartHidden', () => {

        const mockInitialState = {
            hidden: false,
            cartItems : []
        }
        
        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.TOOGLE_CART_HIDDEN,
            }).hidden).toEqual(true)
    })

    
    it('should increase item quantity by 1 when adding a new item that is already in cart', () => {
        const mockNewItem = { 
            id: 1
         }
        const mockInitialState = {
            hidden: true,
            cartItems : [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
        }

        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.ADD_ITEM,
                payload: mockNewItem
            }).cartItems[0].quantity).toBe(4)
    })

    it('should add item to cartItem adding a new item that is not already in cart', () => {
        const mockNewItem = { 
            id: 1
         }
        const mockInitialState = {
            hidden: true,
            cartItems : [{ id: 2, quantity: 1 }]
        }

        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.ADD_ITEM,
                payload: mockNewItem
            }).cartItems.length).toBe(2)
    })

    it('should decrease item quantity by 1 when removing an item that is already in cart', () => {
        const mockNewItem = { 
            id: 1
         }
        const mockInitialState = {
            hidden: true,
            cartItems : [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
        }

        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.REMOVE_ITEM,
                payload: mockNewItem
            }).cartItems.find(item => item.id === 1).quantity).toBe(2)
    })

    it('should remove item from cart', () => {
        const mockNewItem = { 
            id: 1,
            quantity: 4
         }
        const mockInitialState = {
            hidden: true,
            cartItems : [mockNewItem, { id: 2, quantity: 1 }]
        }

        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.CLEAR_ITEM_FROM_CART,
                payload: mockNewItem
            }).cartItems.includes(item => item.id === 1)).toBe(false)
    })

    it('should clear cart', () => {
        const mockInitialState = {
            hidden: true,
            cartItems : [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }, { id: 3, quantity: 2 }]
        }

        expect(cartReducer(
            mockInitialState,
            {
                type: cartActionsType.CLEAR_CART,
            }).cartItems).toEqual([])
    })
})