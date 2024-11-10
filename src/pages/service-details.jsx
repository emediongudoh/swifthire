import { useParams } from 'react-router-dom';

// Local imports
import { popularServices } from '../constants';
import BookingForm from '../components/service-details/BookingForm';
import WorkProcess from '../components/common/WorkProcess';

export default function ServiceDetails() {
    const { serviceLabel } = useParams();
    const service = popularServices.find(
        service =>
            service.label.toLowerCase().replace(/\s+/g, '-') === serviceLabel
    );

    if (!service) {
        return <p>Service details not found for {serviceLabel}.</p>;
    }

    return (
        <>
            <section
                className='relative min-h-[60vh] bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
                }}
            >
                {/* Booking form container */}
                <BookingForm service={service} />
            </section>

            <div className='pageWrapper mt-48'>
                <WorkProcess />
            </div>
        </>
    );
}
