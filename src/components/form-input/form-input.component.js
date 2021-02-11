import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange , label, ...otherProps }) => (
    

    <div className='group'>
        {console.log(otherProps.value.length)}
        <input className='form-input' onChange = {handleChange} {...otherProps} />
        {
            label ? (
                <label className={`${
                            otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}
                > 
                    {label}
                </label>
                ) 
                : null
        }   
    </div>

)

export default FormInput;