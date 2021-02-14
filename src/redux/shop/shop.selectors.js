import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

//input selector
const selectShop = (state) => state.shop;

// memoize selector
export const selectCollections = createSelector (
    [selectShop],
    (collections) => collections.collections
)

export const selectCollectionsForOverview = createSelector (
    [selectCollections],
    (collections) => (Object.keys(collections).map(key =>
            collections[key]
        ))
)

export const selectCollection = memoize((collectionUrlParam) => (
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
    ))
)
