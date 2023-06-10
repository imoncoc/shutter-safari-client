
import PopularClasses from '../../Popular/PopularClasses/PopularClasses';
import PopularInstructors from '../../Popular/PopularInstructors/PopularInstructors';
import Banner from '../Banner/Banner';
import PhotoContest from '../PhotoContest/PhotoContest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoContest></PhotoContest>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;