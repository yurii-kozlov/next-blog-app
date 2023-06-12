import * as yup from 'yup';

export const signInSchemaValidation = yup.object().shape({
  email: yup.string()
    .required('Email is required!')
    .max(40, 'Email doesn\nt have to contain more than 40 characters')
    .email('Please enter a valid email address'),
  password: yup.string()
    .required('Password is required!')
    .min(5, 'Password has to be between 5 and 50 characters')
    .max(50, 'Password has to be between 5 and 50 characters')
})
