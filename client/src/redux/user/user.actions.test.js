import userActionTypes from './user.types'
import * as userActions from './user.actions'

describe ('userActions', () => {
    it ('googleSignInStart: should create an action to start google sign in', () => {
        const expectedAction = {
            type: userActionTypes.GOOGLE_SIGN_IN_START
        }
        expect(userActions.googleSignInStart()).toEqual(expectedAction)
    })

    it ('emailSignInStart: should create an action to start email and pass sign in', () => {
        const mockEmailAndPassowrd = {
            email: 'maria@testmail.com',
            password: 'thisisjustatest'
        }

        const expectedAction = {
            type: userActionTypes.EMAIL_SIGN_IN_START,
            payload: mockEmailAndPassowrd
        }
        expect(userActions.emailSignInStart(mockEmailAndPassowrd)).toEqual(expectedAction)
    })

    it ('signInSucess: should create an action to set current user to state', () => {
        const mockUser = {
            id: '1',
            displayName: 'Maria',
            email: 'maria@testmail.com'
        }
        const expectedAction = {
            type: userActionTypes.SIGN_IN_SUCCESS,
            payload: mockUser
        }
        expect(userActions.signInSucess(mockUser)).toEqual(expectedAction)
    })

    it ('signInFailure: should create an action to set error to state', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_IN_FAILURE,
            payload: 'error'
        }
        expect(userActions.signInFailure('error')).toEqual(expectedAction)
    })

    it ('checkUserSession: should create an action to check user session', () => {
        const expectedAction = {
            type: userActionTypes.CHECK_USER_SESSION
        }
        expect(userActions.checkUserSession()).toEqual(expectedAction)
    })

    it ('signOutStart: should create an action to start sign out', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_OUT_START
        }
        expect(userActions.signOutStart()).toEqual(expectedAction)
    })

    it ('signOutSuccess: should create an action to clear user from state', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_OUT_SUCCESS
        }
        expect(userActions.signOutSuccess()).toEqual(expectedAction)
    })

    it ('signOutFailure: should create an action to set error to state', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_OUT_FAILURE,
            payload: 'error'
        }
        expect(userActions.signOutFailure('error')).toEqual(expectedAction)
    })

    it ('signUpStart: should create an action to start sign up', () => {
        const mockUserForm = {
            displayName: 'Maria',
            email: 'maria@testmail.com',
            password: 'anothertest',
            confirmPassword: 'anothertest'
        }
        const expectedAction = {
            type: userActionTypes.SIGN_UP_START,
            payload: mockUserForm
        }
        expect(userActions.signUpStart(mockUserForm)).toEqual(expectedAction)
    })

    it ('signUpSuccess: should create an action to sign in the user', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_UP_SUCCESS
        }
        expect(userActions.signUpSuccess()).toEqual(expectedAction)
    })

    it ('signUpFailure: should create an action to set error to state', () => {
        const expectedAction = {
            type: userActionTypes.SIGN_UP_FAILURE,
            payload: 'error'
        }
        expect(userActions.signUpFailure('error')).toEqual(expectedAction)
    })
})