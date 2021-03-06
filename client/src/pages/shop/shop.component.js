import React, { lazy, Suspense ,useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import { ShopPageContainer } from './shop.styles'

import Spinner from '../../components/spinner/spinner.component'
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container.js'))
const CollectionsPageContainer = lazy(() => import('../collection/collection.container.js'))

export const ShopPage = ( { match, fetchCollectionsStart }) => {

    useEffect ( () => {
        fetchCollectionsStart()
    },[fetchCollectionsStart])
        
    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={ CollectionsOverviewContainer } />
                <Route path={`${match.path}/:collectionId`} component={ CollectionsPageContainer } />
            </Suspense>
        </ShopPageContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps) (ShopPage);