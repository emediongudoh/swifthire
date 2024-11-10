import WorkProcess from '../components/common/WorkProcess';
import AboutUs from '../components/home/AboutUs';
import HeroText from '../components/home/HeroText';
import PopularServices from '../components/home/PopularServices';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
    return (
        <>
            <HeroText />
            <PopularServices />
            <AboutUs />
            <WhyChooseUs />
            <WorkProcess />
        </>
    );
}
