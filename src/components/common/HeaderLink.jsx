import { useState } from 'react';

// Third-party imports
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeaderLink({ label, href }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className='relative h-fit w-fit'
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `relative ${isActive ? 'text-brand_color_1' : ''}`
                }
            >
                {({ isActive }) => (
                    <>
                        <span className='brandTransition hover:text-brand_color_1'>
                            {label}
                        </span>
                        <span
                            style={{
                                transform:
                                    open || isActive
                                        ? 'scaleX(1)'
                                        : 'scaleX(0)',
                            }}
                            className={`${isActive ? 'absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-brand_color_1' : 'absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-brand_color_1 transition-transform duration-300 ease-out'}`}
                        ></span>
                    </>
                )}
            </NavLink>
        </div>
    );
}

HeaderLink.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
