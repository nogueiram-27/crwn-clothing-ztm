import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImagemContainer, ContentContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={ size } onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImagemContainer className = 'background-image' imageUrl = {imageUrl}/>
        <ContentContainer className = 'content'>
            <h2> { title.toUpperCase() } </h2>
            <span> SHOP NOW </span>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);