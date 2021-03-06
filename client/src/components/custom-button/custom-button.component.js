import React from 'react';

import { CustomButtonContainer } from './custom-button.styles.js';

export const CustomButton = ({ children,...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton