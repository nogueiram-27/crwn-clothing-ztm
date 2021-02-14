import { createSelector } from 'reselect';

//input selector
const selectShop = (state) => state.shop;

// memoize selector
export const selectCollections = createSelector (
    [selectShop],
    (collections) => collections.collections
)