import  userActionTypes from './user.types'
import userReducer from './user.reducer'

const initialState = {
    currentUser:null,
    error:null
}

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })

    it('should set currentUser to payload on SignInSuccess', () => {
        const mockUser = { id: 1, email: 'maria@testmail.com', displayName: 'Maria' }
        expect(userReducer(
            initialState,
            {
                type: userActionTypes.SIGN_IN_SUCCESS,
                payload: mockUser
            }).currentUser).toEqual(mockUser)
    })

    
    it('should set currentUser to null on SignOutSuccess', () => {
        const mockUser = { id: 1, email: 'maria@testmail.com', displayName: 'Maria' }
        const mockState = {
            currentUser: mockUser,
            error:null
        }
        expect(userReducer(
            mockState,
            {
                type: userActionTypes.SIGN_OUT_SUCCESS,
            }).currentUser).toBe(null)
    })

    it('should set error to payload on SignInFailure, SignOutFailure and SignUpFailure', () => {
        const mockError = {
            message: 'errored',
            code: 404
        }
        expect.assertions(3)
        expect(userReducer(
            initialState,
            {
                type: userActionTypes.SIGN_IN_FAILURE,
                payload: mockError
            }).error).toBe(mockError)

        expect(userReducer(
            initialState,
            {
                type: userActionTypes.SIGN_OUT_FAILURE,
                payload: mockError
            }).error).toBe(mockError)

        expect(userReducer(
            initialState,
            {
                type: userActionTypes.SIGN_UP_FAILURE,
                payload: mockError
            }).error).toBe(mockError) 
    })
})