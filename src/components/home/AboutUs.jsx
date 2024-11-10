import { Link, useLocation } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

// Custom imports
import SectionHeader from '../common/SectionHeader';

export default function AboutUs() {
    const location = useLocation();

    return (
        <section className='miniPageWrapper mt-8 grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:gap-16'>
            {/* About content */}
            <div className='flex flex-col gap-4'>
                <SectionHeader
                    subtitle='About SwiftHire'
                    textAlign='left'
                />

                <p className='leading-loose'>
                    At SwiftHire, we connect you with trusted professionals for
                    all your home service needs. Whether it’s a quick fix, a
                    deep clean, or a specialized task, we make finding reliable
                    help simple and hassle-free. Our mission is to save you time
                    and bring peace of mind with every job done right.
                </p>

                <p className='leading-loose'>
                    {location.pathname !== '/' ? (
                        <span>
                            In July 2024, Powerlabs Limited won the Development
                            Bank of Nigeria&apos;s (DBN) Innovation Challenge
                            award at the DBN Techpreneur summit 3.0. This
                            accolade underscores the company&apos;s commitment
                            to innovation and its significant impact on the
                            Nigerian energy sector.
                        </span>
                    ) : null}
                </p>

                {/* Learn more button */}
                {location.pathname === '/' ? (
                    <Link
                        to='/'
                        className='flex w-fit items-center gap-4 rounded-md bg-brand_color_1 px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand_color_1/50 hover:shadow-none'
                    >
                        Learn more{' '}
                        <ArrowRightCircleIcon className='size-6 -rotate-45' />
                    </Link>
                ) : null}
            </div>

            {/* About image */}
            <img
                src='/images/about_us.jpg'
                alt='Team spirit'
                loading='lazy'
                className='shadow-[14px_14px_0px_#0284c7]'
            />
        </section>
    );
}
