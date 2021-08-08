import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Send us a message below and we will get back to you as soon as possible!
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your full name'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Message</label>
                    <input
                        className='form-input-message'
                        type='message'
                        name='message'
                        // placeholder='Enter your message'
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <p>{errors.message}</p>}
                </div>

                {/* <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div> */}
                <button className='form-input-btn' type='submit'>
                    Send
                </button>
                {/* <span className='form-input-login'>
                    Already have an account? Login <a href='#'>here</a>
                </span> */}
            </form>
        </div>
    );
};

export default FormSignup;