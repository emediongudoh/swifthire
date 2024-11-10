import PropTypes from 'prop-types';

export default function FormHeader({ headerText }) {
    return <h2 className='text-center text-2xl font-medium'>{headerText}</h2>;
}

FormHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
};
