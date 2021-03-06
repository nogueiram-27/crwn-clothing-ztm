import { takeLatest, put } from 'redux-saga/effects';
import  userActionTypes from '../user/user.types'
import { cartActionsType } from './cart.types'
import { clearCart } from './cart.actions'
import * as cartSagas from './cart.sagas'


describe('cartSagas triggers', () => {
    it('SIGN_OUT_SUCCESS action should trigger onSignOutSuccess saga', () => {
        const generator = cartSagas.onSignOutSuccess()

        expect(generator.next().value).toEqual(
                takeLatest(userActionTypes.SIGN_OUT_SUCCESS, cartSagas.clearCartOnSignOut)
        )
    })

    it('CHECK_OUT_CART action should trigger onCheckOutCart saga', () => {
        const generator = cartSagas.onCheckOutCart()

        expect(generator.next().value).toEqual(
            takeLatest(cartActionsType.CHECK_OUT_CART, cartSagas.storeUserCartItems)
        )
    })

    it('SIGN_IN_SUCCESS action should trigger onSignInSuccess saga', () => {
        const generator = cartSagas.onSignInSuccess()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.SIGN_IN_SUCCESS, cartSagas.getCartItems)
        )
    })

    it('UPDATE_USER_CART_ITEMS action should trigger onUpdateUserCartItems saga', () => {
        const generator = cartSagas.onUpdateUserCartItems()

        expect(generator.next().value).toEqual(
            takeLatest(cartActionsType.UPDATE_USER_CART_ITEMS, cartSagas.updateCartItems)
        )
    })

    it('CLEAN_USER_CART_ITEMS action should trigger onCleanUserCartItems saga', () => {
        const generator = cartSagas.onCleanUserCartItems()

        expect(generator.next().value).toEqual(
            takeLatest(cartActionsType.CLEAN_USER_CART_ITEMS, cartSagas.cleanCartItems)
        )
    })
})

describe('cartSagas clearCartOnSignOut function', () => {
    const generator = cartSagas.clearCartOnSignOut()

    it('clearCartOnSignOut should fire clearCart', () => {
        
        expect(generator.next().value).toEqual(put(clearCart()))
    })
})