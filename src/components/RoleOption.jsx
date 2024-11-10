import PropTypes from 'prop-types';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function RoleOption({ name, values, setFieldValue }) {
    const isPicked = values.role === name;

    return (
        <span
            onClick={() => setFieldValue('role', isPicked ? '' : name)}
            className={`brandTransition relative flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border-2 p-3 text-sm ${isPicked ? 'border-brand_color_1' : 'border-gray-300'}`}
        >
            {isPicked && <CheckIcon className='size-6 text-brand_color_1' />}
            {name}
        </span>
    );
}

RoleOption.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.shape({
        role: PropTypes.string.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
};
