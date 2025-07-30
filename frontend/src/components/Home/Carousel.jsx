import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../pages/Home/Home.css"; // Optional custom CSS

const HomeCarousel = () => {
    return (
        <div className="">
            <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true}>
                {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
                    <div key={idx}>
                        <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="h-[500px] "
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
