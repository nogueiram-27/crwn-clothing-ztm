import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import  userActionTypes from '../user/user.types'
import { cartActionsType } from './cart.types'
import { clearCart, setUserCartItems } from './cart.actions'
import { selectCartItems } from './cart.selectors'
import { compareCartItemsArray } from './cart.utils'

import { upsertUserCartItemsDocuments, getCurrentUser, getUserCartItems } from '../../firebase/firebase.utils'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* storeUserCartItems({ payload }) {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    const cartItemsDb = yield call(getUserCartItems, userAuth.uid);  
    const hasChanged = yield call(compareCartItemsArray, cartItemsDb, payload)

    if(!hasChanged) return;

     yield call(upsertUserCartItemsDocuments, payload, userAuth.uid);
}

export function* getCartItems() {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    const cartItems = yield call(getUserCartItems, userAuth.uid);
    yield put(setUserCartItems(cartItems))
}

export function* updateCartItems() {  
    const userAuth = yield getCurrentUser(); 
    const cartItems = yield select(selectCartItems)
    yield call (upsertUserCartItemsDocuments, cartItems, userAuth.uid)    
}

export function* cleanCartItems() {
    const userAuth = yield getCurrentUser(); 
    yield call (upsertUserCartItemsDocuments, [], userAuth.uid)  
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* onCheckOutCart() {
    yield takeLatest(cartActionsType.CHECK_OUT_CART, storeUserCartItems)
}

export function* onSignInSuccess() {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, getCartItems)
}

export function* onUpdateUserCartItems() {
    yield takeLatest(cartActionsType.UPDATE_USER_CART_ITEMS, updateCartItems)
}

export function* onCleanUserCartItems() {
    yield takeLatest(cartActionsType.CLEAN_USER_CART_ITEMS, cleanCartItems)
}

export function* cartSagas() {
    yield all ([
        call(onSignOutSuccess),
        call(onCheckOutCart),
        call(onSignInSuccess),
        call(onUpdateUserCartItems),
        call(onCleanUserCartItems)
    ])
}