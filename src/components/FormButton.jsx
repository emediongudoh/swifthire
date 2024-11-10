import PropTypes from 'prop-types';

function FormButton({ btnText, disabled }) {
    return (
        <button
            type='submit'
            className={`brandTransition mt-4 w-full rounded-md bg-brand_color_1 p-3 text-white ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
            {btnText}
        </button>
    );
}

FormButton.propTypes = {
    btnText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default FormButton;
