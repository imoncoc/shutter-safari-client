import { toast } from 'react-toastify';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import './PhotoContest.css';
import { Fade } from 'react-awesome-reveal';

const PhotoContest = () => {

    const handleJoinNow = () => {
        toast("😢 No Contest is available right now. ", {
          position: toast.POSITION.TOP_CENTER,
        });
    }



    return (
      <>
        <HeadingTitle
          title={"Photo Contest"}
          description={
            "Capture the Moment, Join Our Photo Contest and Showcase Your Creativity!"
          }
        ></HeadingTitle>

        <Fade>
          <div className="container" style={{ marginBottom: "5rem" }}>
            <div className="row">
              <div className="col-10 col-md-6 mx-auto my-5">
                <div>
                  <p className="text-uppercase fs-5 fw-bold text-lime-600">
                    Photography Contest - Last Year&rsquo;s Winners
                  </p>
                  <p className="text-muted">
                    Take a moment to explore the breathtaking entries from last
                    year&rsquo;s contest, as we showcase the winning photographs
                    that captivated our judges and touched our hearts.
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-uppercase fs-5 fw-semibold text-lime-600">
                    Join us in celebrating the beauty of the art
                  </p>
                  <p className="text-muted">
                    Stay tuned for updates on our upcoming photography contest,
                    where you&rsquo;ll have the chance to showcase your own
                    talent and compete alongside other passionate photographers
                    from around the world.
                  </p>
                </div>

                <span onClick={handleJoinNow}>
                  <PrimaryButton name="Join Now"></PrimaryButton>
                </span>
              </div>

              {/* <!-- Project 1 --> */}
              <div className="col-10 col-md-6 mx-auto my-5">
                <div className="composition" style={{ marginBottom: "18rem" }}>
                  <img
                    src={"https://i.ibb.co/tYTkP2P/photo-contest-03.jpg"}
                    alt="Photo 1"
                    className="composition__photo composition__photo--p1 img-fluid"
                  />

                  <img
                    src={"https://i.ibb.co/HBfwbdB/photo-contest-02.jpg"}
                    alt="Photo 2"
                    className="composition__photo composition__photo--p2 img-fluid "
                  />

                  <img
                    src={"https://i.ibb.co/pLd78yS/photo-contest-01.jpg"}
                    alt="Photo 3"
                    className="composition__photo composition__photo--p3 img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
};

export default PhotoContest;