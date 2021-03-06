import { takeLatest, call, put } from 'redux-saga/effects'
import { ShopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import * as shopSagas from './shop.sagas'


describe('shopSagas triggers', () => {
    it('FETCH_COLLECTIONS_START action should trigger fetchCollectionsStart saga', () => {
        const generator = shopSagas.fetchCollectionsStart()

        expect(generator.next().value).toEqual(
            takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, shopSagas.fetchCollectionsAsync)
        )
    })
})

describe('shopSagas fetchCollectionsAsync function', () => {
    const generator = shopSagas.fetchCollectionsAsync()

    it('fetchCollectionsAsync should call firestore.collection', () => {
        const getCollection = jest.spyOn(firestore, 'collection')
        generator.next()
        expect(getCollection).toHaveBeenCalled()
    })

    it('fetchCollectionsAsync should call convertCollectionsSnapshotToMap', () => {
        const mockSnapshot = {}
        expect(generator.next(mockSnapshot).value).toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot))
    })

    it('fetchCollectionsAsync should fire fetchCollectionsSuccess if collectionMap is successful', () => {
        const mockCollectionsMap = {
            hats: {id: 1},
            jackets: {id: 2}
        }
        expect(generator.next(mockCollectionsMap).value).toEqual(put(fetchCollectionsSuccess(mockCollectionsMap)))
    })

    it('fetchCollectionsAsync should fire fetchCollectionsFailure if function fails at any point', () => {
        const generator2 = shopSagas.fetchCollectionsAsync()
        generator2.next()
        expect(generator2.throw({ message: 'error' }).value).toEqual(put(fetchCollectionsFailure('error')))
    })
})