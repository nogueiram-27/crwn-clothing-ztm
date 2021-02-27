import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomepageContainer } from './homepage.styles'

const Homepage = () => {
    //throw Error
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer> 
    )
}

export default Homepage;