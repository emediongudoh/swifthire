import { useCallback, useEffect, useState } from 'react';

// Third-party imports
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

// Hook imports
import useDebounce from '../hooks/useDebounce';

// App imports
import { axiosInstance } from '../app/api';

export default function FormInput({
    placeholder,
    emailError,
    setEmailError,
    checkEmail = false,
    ...props
}) {
    const [field, meta] = useField(props);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    // Use the debounce hook
    const debouncedEmail = useDebounce(field.value, 50);

    const checkEmailExists = useCallback(
        async email => {
            try {
                setLoading(true);

                const res = await axiosInstance.post(`/users/check-email`, {
                    email,
                });
                setLoading(false);

                if (res.status === 200) {
                    setEmailError('');
                }
            } catch (error) {
                setLoading(false);
                setEmailError(error.response?.data.message);
            }
        },
        [setEmailError, setLoading]
    );

    useEffect(() => {
        if (debouncedEmail && checkEmail) {
            checkEmailExists(debouncedEmail);
        }
    }, [debouncedEmail, checkEmail, checkEmailExists]);

    return (
        <div className='mt-4'>
            <input
                type={field.type}
                name={field.name}
                placeholder={placeholder}
                autoComplete='off'
                {...field}
                {...props}
                className='w-full rounded-md border-none bg-gray-200 p-3 outline-none'
            />

            {meta.touched && (meta.error || emailError) && (
                <p className='text-sm text-error_color'>
                    <ErrorMessage name={field.name} />
                </p>
            )}

            {emailError && (
                <p className='text-sm text-error_color'>{emailError}</p>
            )}
        </div>
    );
}

FormInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    emailError: PropTypes.string,
    setEmailError: PropTypes.func,
    checkEmail: PropTypes.bool,
};
