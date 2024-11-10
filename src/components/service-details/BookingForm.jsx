import { StarIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

export default function BookingForm({ service }) {
    return (
        <form className='absolute -bottom-1/3 left-1/2 mx-auto flex w-full max-w-4xl -translate-x-1/2 translate-y-2/3 transform flex-col items-center gap-8 bg-white p-4 shadow-md md:bottom-1/3 md:p-8'>
            <h2 className='text-center text-4xl'>{service.label}</h2>

            <div className='flex gap-1'>
                <StarIcon className='size-6 fill-brand_color_1' />
                <StarIcon className='size-6 fill-brand_color_1' />
                <StarIcon className='size-6 fill-brand_color_1' />
                <StarIcon className='size-6 fill-brand_color_1' />
                <StarIcon className='size-6' />
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3'>
                <input
                    type='text'
                    placeholder='ZIP Code'
                    className='rounded-md border-none bg-gray-200 p-3 outline-none'
                />

                <div className='flex gap-4'>
                    <select
                        name=''
                        id=''
                        className='flex-1 rounded-md bg-gray-200 outline-none'
                    >
                        <option value=''>1 beds</option>
                        <option value=''>2 beds</option>
                        <option value=''>3 beds</option>
                        <option value=''>4 beds</option>
                        <option value=''>5 beds</option>
                    </select>
                    <select
                        name=''
                        id=''
                        className='flex-1 rounded-md bg-gray-200 outline-none'
                    >
                        <option value=''>1 baths</option>
                        <option value=''>2 baths</option>
                        <option value=''>3 baths</option>
                        <option value=''>4 baths</option>
                        <option value=''>5 baths</option>
                    </select>
                </div>

                <div className='flex gap-4'>
                    <input
                        type='date'
                        className='flex-1 rounded-md bg-gray-200'
                    />
                    <input
                        type='time'
                        name=''
                        id=''
                        className='flex-1 rounded-md bg-gray-200'
                    />
                </div>

                <input
                    type='tel'
                    placeholder='Phone number'
                    className='rounded-md border-none bg-gray-200 p-3 outline-none'
                />

                <input
                    type='email'
                    placeholder='Email address'
                    className='rounded-md border-none bg-gray-200 p-3 outline-none'
                />

                <button
                    type='submit'
                    className='w-full rounded-md bg-brand_color_1 px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
                >
                    Get a quote
                </button>
            </div>

            <p className='text-xs text-gray-800'>
                By clicking Get a Quote, I confirm that I have read and agree to
                the Service Terms, and authorize the platform to contact me
                regarding service matches via calls or texts, which may include
                automated technology and pre-recorded messages. Consent is not
                required for purchase.
            </p>
        </form>
    );
}

BookingForm.propTypes = {
    service: PropTypes.object.isRequired,
};
