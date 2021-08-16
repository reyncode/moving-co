import React from 'react';
import './Form.css';
import Icon1 from '../../images/email-confirmed.svg'

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <h1 className='form-success'>Thank you! We will reply shortly!</h1>
            <img className='success-icon' src={Icon1} alt='confirmed' />
        </div>
    );
};

export default FormSuccess;