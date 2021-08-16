import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors, handleClick } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1 className='contact-header'>
                    To receive a free quote, fill out the form below.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Phone</label>
                    <input
                        className='form-input'
                        type='tel'
                        name='phone'
                    // value={values.email}
                    // onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='text'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Message</label>
                    <textarea
                        className='form-input-message'
                        type='text'
                        name='message'
                        placeholder='Please include a description of the freight, date, time and pickup & dropoff addresses.'
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button className='form-input-btn' type='submit' onClick={handleClick}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default FormSignup;