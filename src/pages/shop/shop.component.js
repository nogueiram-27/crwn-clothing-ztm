import React from 'react';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component.js';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.js';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading:true
    }

    unsubscribreFromSnapshot = null;

    componentDidMountUsingObservable() {
        const { updateCollections } = this.props;

        const collectionsRef = firestore.collection('collections');
        this.unsubscribreFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    componentDidMount() {
        //the tradeof is that we get the data only when the components mount
        const { updateCollections } = this.props;

        const collectionsRef = firestore.collection('collections');
        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })    
    }

    componentDidMountUsingFetch() {
        fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-ztm-db-eee43/databases/(default)/documents/collections')
            .then(response => response.json())
            .then(collections => console.log(collections))
            // do not proceed because the json response from firebase is really nested to obtain the value of the collections
    }

    render () {
        const { match } = this.props;
        const { loading } = this.state;

      return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    } 
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps) (ShopPage);