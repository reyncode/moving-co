import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [send, setSend] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {

        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleClick = e => {
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (send) {
            emailjs.sendForm('service_5768qct', 'template_e2dp17r', e.target, 'user_4DgzViYlIVpJfyT1Ax5b3')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            callback();
        }
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0) {
                if (isSubmitting) {
                    setSend(true);
                }
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors, handleClick };
};

export default useForm;