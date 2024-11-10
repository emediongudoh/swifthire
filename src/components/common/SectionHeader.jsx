import PropTypes from 'prop-types';

export default function SectionHeader({ subtitle, title, textAlign = 'left' }) {
    return (
        <div className={`flex flex-col gap-2.5 text-${textAlign}`}>
            <p className='text-4xl font-bold uppercase'>{subtitle}</p>
            <h2 className='text-4xl font-bold uppercase'>{title}</h2>
        </div>
    );
}

SectionHeader.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};
