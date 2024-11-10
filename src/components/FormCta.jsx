import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FormCta({ ctaText, linkText, linkDest }) {
    return (
        <p className='mt-4 text-center text-sm'>
            {ctaText} &nbsp;
            <Link
                to={linkDest}
                type='button'
                className='brandTransition text-brand_color_1 underline'
            >
                {linkText}
            </Link>
        </p>
    );
}

FormCta.propTypes = {
    ctaText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkDest: PropTypes.string.isRequired,
};
