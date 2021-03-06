import {ShopActionTypes} from './shop.types';
import * as shopActions from './shop.actions'

describe ('shopActions', () => {
    it ('fetchCollectionsStart: should create an action to start fetch collection', () => {
        const expectedAction = {
            type: ShopActionTypes.FETCH_COLLECTIONS_START
        }
        expect(shopActions.fetchCollectionsStart()).toEqual(expectedAction)
    })

    it ('fetchCollectionsSuccess: should create an action to add collections to state', () => {
        const mockCollections = {
            hat: {
                id: 1
            },
            jacket: {
                id: 2
            }
        }

        const expectedAction = {
            type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: mockCollections
        }
        expect(shopActions.fetchCollectionsSuccess(mockCollections)).toEqual(expectedAction)
    })

    it ('fetchCollectionsFailure: should create an action to set error message to state', () => {
        const expectedAction = {
            type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: 'error'
        }
        expect(shopActions.fetchCollectionsFailure('error')).toEqual(expectedAction)
    })
})