import { takeLatest } from 'redux-saga/effects'
import userActionTypes from './user.types'
import * as userActions from './user.sagas'


describe('userSagas triggers', () => {
    it('SIGN_UP_START action should trigger onSignUpStart saga', () => {
        const generator = userActions.onSignUpStart()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.SIGN_UP_START, userActions.signUp)
        )
    })

    it('SIGN_OUT_START action should trigger onSignUpStart saga', () => {
        const generator = userActions.onSignOutStart()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.SIGN_OUT_START, userActions.signOut)
        )
    })

    it('GOOGLE_SIGN_IN_START action should trigger onGoogleSignInStart saga', () => {
        const generator = userActions.onGoogleSignInStart()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, userActions.signInWithGoogle)
        )
    })

    it('EMAIL_SIGN_IN_START action should trigger onEmailSignInStart saga', () => {
        const generator = userActions.onEmailSignInStart()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.EMAIL_SIGN_IN_START, userActions.signInWithEmail)
        )
    })

    it('CHECK_USER_SESSION action should trigger onCheckUserSession saga', () => {
        const generator = userActions.onCheckUserSession()

        expect(generator.next().value).toEqual(
            takeLatest(userActionTypes.CHECK_USER_SESSION, userActions.isUserAuthenticated)
        )
    })

})