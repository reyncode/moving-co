export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.message) {
        errors.message = 'Message is too short';
    } else if (values.message.length < 1) {
        errors.message = 'Message cannot be empty';
    }

    // if (!values.password2) {
    //     errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //     errors.password2 = 'Passwords do not match';
    // }
    return errors;
}