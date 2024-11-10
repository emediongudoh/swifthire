import { whyChooseUs } from '../../constants';
import SectionHeader from '../common/SectionHeader';
import WhyChooseUsCard from './WhyChooseUsCard';

export default function WhyChooseUs() {
    return (
        <section className='pageWrapper mt-8 flex flex-col items-center gap-4 p-4 sm:gap-8'>
            <SectionHeader
                subtitle='Why Choose Us'
                textAlign='center'
            />

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
                {whyChooseUs.map((item, index) => (
                    <WhyChooseUsCard
                        key={index}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item?.description}
                    />
                ))}
            </div>
        </section>
    );
}
