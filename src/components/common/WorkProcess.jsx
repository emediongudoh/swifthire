import { workSteps } from '../../constants';
import SectionHeader from './SectionHeader';
import WorkStep from './WorkStep';

export default function WorkProcess() {
    return (
        <section className='pageWrapper mt-8 flex flex-col items-center gap-4 p-4 sm:gap-8'>
            <SectionHeader
                subtitle='How SwiftHire works'
                textAlign='center'
            />

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
                {workSteps.map((step, index) => (
                    <WorkStep
                        key={index}
                        imgSrc={step.imgSrc}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step?.description}
                    />
                ))}
            </div>
        </section>
    );
}
