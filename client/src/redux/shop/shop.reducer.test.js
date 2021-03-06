import { ShopActionTypes } from './shop.types';
import shopReducer from './shop.reducer'

const initialState = {
    collections : null,
    isFetching: false,
    errorMessage: undefined
}

describe('shopReducer', () => {
    it('should return initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(initialState)
    })

    it('should set isFetching to true on fetchCollectionsStart', () => {
        
        expect(shopReducer(
            initialState,
            {
                type: ShopActionTypes.FETCH_COLLECTIONS_START,
            }).isFetching).toEqual(true)
    })

    
    it('should set isFetching to false and collections from payload on fetchCollectionsSuccess', () => {
        const mockCollections = { 
            items: [ {  id: 1 }, { id: 2 }, { id: 3 } ],
            title: 'test'
         }
        const mockInitialState = {
            collections: null,
            isFetching: true,
            errorMessage: undefined
        }

        const mockFinalState = {
            collections: mockCollections,
            isFetching: false,
            errorMessage: undefined
        }

        expect(shopReducer(
            mockInitialState,
            {
                type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: mockCollections
            })).toEqual(mockFinalState)
    })

    it('should isFetching to false and error from payload on fetchCollectionsFailure', () => {
        const mockInitialState = {
            collections: null,
            isFetching: true,
            errorMessage: undefined
        }

        const mockFinalState = {
            collections: null,
            isFetching: false,
            errorMessage: 'error'
        }
        expect(shopReducer(
            mockInitialState,
            {
                type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
                payload: 'error'
            })).toEqual(mockFinalState)
    })
})