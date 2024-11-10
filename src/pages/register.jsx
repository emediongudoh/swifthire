import { useState } from 'react';

// Third-party imports
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

// Components import
import FormHeader from '../components/FormHeader';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormCta from '../components/FormCta';
import RoleOption from '../components/RoleOption';

// Local imports
import { registerUser } from '../app/api';
import { registerAction } from '../actions/userActions';
import { roleOptions } from '../constants';

const initialState = {
    fullname: '',
    email: '',
    password: '',
    role: '',
};

export default function Register() {
    const [initialValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    console.log(user);

    const validationSchema = Yup.object({
        fullname: Yup.string()
            .required('Please provide your fullname')
            .min(2, 'Fullname must be at least 2 characters long'),
        email: Yup.string()
            .required('Please provide your email address')
            .email('The email address you entered is not valid')
            .matches(
                /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/,
                'Invalid email format'
            ),
        password: Yup.string()
            .required('Please provide your password')
            .matches(
                /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/,
                'Password must contain at least 1 special character, 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 8 characters long'
            ),
        role: Yup.string().required('You must pick a role to continue'),
    });

    const handleSubmit = async values => {
        setLoading(true);

        try {
            const res = await registerUser(values);
            const { _id, fullname, email, password, role, token } = res;

            toast.success(`Signup successful`, { duration: 3000 });

            dispatch(
                registerAction({
                    _id,
                    fullname,
                    email,
                    password,
                    role,
                    token,
                })
            );
            Cookies.set('user', JSON.stringify(res));

            navigate('/');
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                    'Something went wrong. Please try again',
                {
                    duration: 3000,
                }
            );
        } finally {
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
            {({
                handleChange,
                handleBlur,
                values,
                setFieldValue,
                isValid,
                dirty,
            }) => (
                <Form className='flex flex-col'>
                    <FormHeader headerText='Register' />

                    <FormInput
                        type='text'
                        name='fullname'
                        placeholder='Fullname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullname}
                    />
                    <FormInput
                        type='email'
                        name='email'
                        placeholder='Email address'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        emailError={emailError}
                        setEmailError={setEmailError}
                        checkEmail={true}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />

                    <p className='mt-4 text-sm text-gray-800'>
                        I am a service ):
                    </p>
                    <div className='mt-4 flex gap-4'>
                        {roleOptions.map((role, index) => (
                            <RoleOption
                                key={index}
                                name={role}
                                values={values}
                                setFieldValue={setFieldValue}
                            />
                        ))}
                    </div>

                    <FormButton
                        btnText={loading ? 'Registering...' : 'Register'}
                        disabled={!(isValid && dirty)}
                    />

                    <FormCta
                        ctaText='Already have an account?'
                        linkText='Login!'
                        linkDest='/login'
                    />
                </Form>
            )}
        </Formik>
    );
}
