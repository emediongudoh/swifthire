import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ServiceCard({ label, href, image }) {
    return (
        <Link
            to={href}
            className='brandTransition rounded-lg bg-white p-2 shadow-md hover:border-2 hover:border-brand_color_1'
        >
            <img
                src={image}
                alt={label}
                className='h-48 w-full object-cover'
            />

            <div className='p-4'>
                <h2>{label}</h2>
            </div>
        </Link>
    );
}

ServiceCard.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
