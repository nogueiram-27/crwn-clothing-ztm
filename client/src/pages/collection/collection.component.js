import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles'

const CollectionPage = ({ collection }) => {
    console.log('collection', collection);
    const { title, items } = collection;    
    return(
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer> 
            <ItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)
    return{collection: selectCollection(ownProps.match.params.collectionId)(state)}
    
}

export default connect(mapStateToProps)(CollectionPage);