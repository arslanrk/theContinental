import * as Yup from 'yup';

export const SignUpSchemaValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Inavlid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    gender: Yup.string().required('Select a gender'),
})