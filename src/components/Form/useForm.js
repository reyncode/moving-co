import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        phone: '',
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

    function handleClick() {
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (send) {
            emailjs.sendForm('service_0q7oxtg', 'template_oqsjdiq', e.target, 'user_rUlCDCDi3MkcQ5agmVWcF')
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
        [errors, isSubmitting]
    );

    return { handleChange, handleSubmit, values, errors, handleClick };
};

export default useForm;