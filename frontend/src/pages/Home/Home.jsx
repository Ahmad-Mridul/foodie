import HomeCarousel from "../../components/Home/Carousel";
import SectionHeading from "../../components/shared/SectionHeading";
import "./Home.css";
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FOODIE | HOME</title>
            </Helmet>
            <HomeCarousel />
            <SectionHeading
                title="From 11:00am to 10:00pm"
                heading="ORDER ONLINE"
            />
        </div>
    );
};

export default Home;
