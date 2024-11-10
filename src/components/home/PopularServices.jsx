import { useNavigate } from 'react-router-dom';
import { popularServices } from '../../constants';
import ServiceCard from './ServiceCard';

export default function PopularServices() {
    const navigate = useNavigate();

    const handleNavigation = service => {
        const formattedLabel = service.label.toLowerCase().replace(/\s+/g, '-');
        console.log(formattedLabel);
        navigate(`/services/${formattedLabel}`, { state: { service } });
    };

    return (
        <section className='pageWrapper mt-8 p-4'>
            <h2 className='text-4xl font-bold uppercase'>Popular Services</h2>
            <p className='mt-4'>
                Instantly book highly rated pros for cleaning and handyman tasks
                at an upfront price.{' '}
            </p>

            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-4'>
                {popularServices.map(popularService => (
                    <ServiceCard
                        key={popularService.label}
                        {...popularService}
                        onClick={() => handleNavigation(popularService.href)}
                    />
                ))}
            </div>
        </section>
    );
}
