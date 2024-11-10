import { useEffect, useState } from 'react';

// Third-party imports
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Local imports
import { logoutAction } from '../../actions/userActions';

// Local imports
// import HeaderLink from './HeaderLink';
// import { headerLinks } from '../../constants';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const { user } = useSelector(state => state.user);
    const token = user?.token;
    const fullname = user?.fullname;

    const dispatch = useDispatch();

    const { _id, email, password, role } = user;

    const handleLogout = () => {
        dispatch(
            logoutAction({
                _id,
                fullname,
                email,
                password,
                role,
                token,
            })
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}
        >
            <section className='pageWrapper flex items-center justify-between p-4'>
                {/* SwiftHire logo */}
                <Link
                    to='/'
                    className='text-2xl font-bold text-brand_color_1'
                >
                    SwiftHire
                </Link>

                {/* Navigation links */}
                <nav className='flex items-center gap-4'>
                    {/* {headerLinks.map((headerLink, index) => (
                        <HeaderLink
                            key={index}
                            label={headerLink.label}
                            href={headerLink.href}
                        />
                    ))} */}

                    {/* Login button */}
                    {!token ? (
                        <>
                            <Link
                                to='/login'
                                className='hidden w-fit rounded-md bg-gray-200 px-6 py-2.5 font-medium shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none sm:inline-block'
                            >
                                Login
                            </Link>

                            {/* Register button */}
                            <Link
                                to='/register'
                                className='hidden w-fit rounded-md bg-brand_color_1 px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand_color_1/50 hover:shadow-none sm:inline-block'
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className='flex size-10 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-800'>
                                {fullname.charAt(0).toUpperCase()}
                            </div>

                            <button
                                type='button'
                                className='flex w-fit items-center gap-2.5 rounded-md bg-brand_color_1 px-6 py-2.5 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand_color_1/50 hover:shadow-none'
                                onClick={handleLogout}
                            >
                                Logout{' '}
                                <ArrowRightCircleIcon className='size-6' />
                            </button>
                        </>
                    )}
                </nav>
            </section>
        </header>
    );
}
