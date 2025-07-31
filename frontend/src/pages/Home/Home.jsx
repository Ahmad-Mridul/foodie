import HomeCarousel from "../../components/Home/Carousel";
import Swipe from "../../components/Home/Swipe";
import Cover from "../../components/shared/Cover";
import SectionHeading from "../../components/shared/SectionHeading";
import "./Home.css";
import { Helmet } from "react-helmet";
import coverImg from "../../assets/home/chef-service.jpg";
import MenuCard from "../../components/shared/MenuCard";
import Contact from "../../components/Home/Contact";
import ProductCard from "../../components/shared/ProductCard";
import SingleBolg from "../../components/Home/SingleBolg";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
    return (
        <div className="space-y-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FOODIE | HOME</title>
            </Helmet>
            <HomeCarousel />
            
            <Swipe />
            <Cover
                bg={coverImg}
                title="foodie"
                desc="At Foodie, we believe great food brings people together. Our menu blends fresh ingredients with bold flavors to create dishes that are both comforting and exciting. Whether you’re stopping by for a quick bite or a full meal, you’ll always find something made with care and served with a smile."
            />
            <SectionHeading title="Check it out" heading="FROM OUR MENU" />
            <MenuCard btn="View Full  Menu" />
            <Contact />
            <SectionHeading title="Should Try" heading="CHEF RECOMMENDS" />
            <ProductCard />
            <SingleBolg/>
            <Testimonials/>
        </div>
    );
};

export default Home;
