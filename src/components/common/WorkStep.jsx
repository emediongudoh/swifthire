import PropTypes from 'prop-types';

export default function WorkStep({ imgSrc, stepNumber, title, description }) {
    return (
        <div className='flex flex-col items-center gap-2.5 text-center'>
            <img
                src={imgSrc}
                alt={title}
                loading='lazy'
                className='h-20 object-contain'
            />
            <span className='w-fit rounded-md bg-brand_color_1 px-4 py-1 text-center text-white shadow-[3px_3px_0px_black]'>
                Step - {stepNumber}
            </span>

            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-sm leading-loose'>{description}</p>
        </div>
    );
}

WorkStep.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    stepNumber: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
