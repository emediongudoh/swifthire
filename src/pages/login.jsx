import { useState } from 'react';

// Third-party imports
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

// Components import
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormCta from '../components/FormCta';

// Local imports
import { loginUser } from '../app/api';
import { loginAction } from '../actions/userActions';

const initialState = {
    email: '',
    password: '',
};

export default function Login() {
    const [initialValues] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Please provide your email address')
            .email('The email address you entered is not valid')
            .matches(
                /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/,
                'Invalid email format'
            ),
        password: Yup.string().required('Please provide your password'),
    });

    const handleSubmit = async values => {
        setLoading(true);

        try {
            const res = await loginUser(values.email, values.password);
            const { _id, fullname, email, role, token } = res;

            toast.success(`Login successful`, {
                duration: 3000,
            });

            dispatch(
                loginAction({
                    _id,
                    fullname,
                    email,
                    role,
                    token,
                })
            );
            Cookies.set('user', JSON.stringify(res));

            setLoading(false);

            navigate('/');
        } catch (error) {
            toast.error(error.message, { duration: 3000 });
            setLoading(false);
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, values, isValid, dirty }) => (
                <Form className='flex flex-col'>
                    <FormHeader headerText='Welcome back' />

                    <FormInput
                        type='email'
                        name='email'
                        placeholder='Email address'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />

                    <FormButton
                        btnText={loading ? 'Logging in...' : 'Login'}
                        disabled={!(isValid && dirty)}
                    />

                    <FormCta
                        ctaText='New here?'
                        linkText='Register now!'
                        linkDest='/register'
                    />
                </Form>
            )}
        </Formik>
    );
}
