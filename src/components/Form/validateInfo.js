export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Name required';
    }

    if (!/^[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im.test(values.phone)) {
        errors.phone = 'Phone number must be 10 digits';
    }

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

    return errors;
}