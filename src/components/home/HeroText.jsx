import { useMediaQuery } from 'react-responsive';

export default function HeroText() {
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 500px)',
    });

    return (
        <section
            className='flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-cover bg-scroll bg-center bg-no-repeat text-slate-200 bg-blend-multiply'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(bg.jpg)`,
            }}
        >
            {!isSmallScreen && (
                <h1 className='flex flex-col gap-3 text-center text-6xl'>
                    <span>
                        Find{' '}
                        <span className='bg-brand_color_1 text-white'>
                            Reliable
                        </span>{' '}
                        Help for
                    </span>
                    <span className='font-bold'>All Your Everyday Needs</span>
                </h1>
            )}
            {isSmallScreen && (
                <h1 className='text-center text-4xl font-bold'>
                    Find Reliable Help for All Your Everyday Needs
                </h1>
            )}
        </section>
    );
}
