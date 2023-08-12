
import PopularClasses from '../../Popular/PopularClasses/PopularClasses';
import PopularInstructors from '../../Popular/PopularInstructors/PopularInstructors';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import PhotoContest from '../PhotoContest/PhotoContest';
import SnapshotSafaris from '../SnapshotSafaris/SnapshotSafaris';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoContest></PhotoContest>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <SnapshotSafaris></SnapshotSafaris>
            <Features></Features>
        </div>
    );
};

export default Home;