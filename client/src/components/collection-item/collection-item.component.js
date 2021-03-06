import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

import { CollectionItemContainer, BackgroundImageContainer, CollectionFooterContainer, NameContainer, PriceContainer, AddButtonContainer } from './collection-item.styles';

export const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer >
                <BackgroundImageContainer className='image' imageUrl={imageUrl} />
                <CollectionFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>${price}</PriceContainer>
                </CollectionFooterContainer>
                <AddButtonContainer className='custom-button' onClick={() =>addItem(item)} inverted>ADD TO CART</AddButtonContainer>                
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);