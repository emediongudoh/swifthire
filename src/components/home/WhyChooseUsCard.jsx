import PropTypes from 'prop-types';

export default function WhyChooseUsCard({ imgSrc, title, description }) {
    return (
        <div className='flex items-center gap-2.5 rounded-md border-2 border-brand_color_1 p-4'>
            <img
                src={imgSrc}
                alt={title}
                loading='lazy'
                className='h-20 object-contain'
            />

            <div className='flex flex-col gap-2.5'>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <p className='text-sm leading-loose'>{description}</p>
            </div>
        </div>
    );
}

WhyChooseUsCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
