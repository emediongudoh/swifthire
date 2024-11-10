import { Link, Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className='relative flex h-screen w-full flex-col items-center justify-center bg-gray-100'>
            {/* SwiftHire logo */}
            <Link
                to='/'
                className='absolute left-4 top-4 text-2xl font-bold text-brand_color_1'
            >
                SwiftHire
            </Link>

            {/* Content area */}
            <div className='w-full max-w-md rounded-2xl bg-white px-4 py-8 shadow-sm sm:p-8'>
                <Outlet />
            </div>
        </div>
    );
}
