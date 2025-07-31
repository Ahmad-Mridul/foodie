import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Swipe = () => {
    const swipeContents = [
        { title: "salads", img: img1 },
        { title: "pizzas", img: img2 },
        { title: "soups", img: img3 },
        { title: "deserts", img: img4 },
        { title: "salads", img: img5 },
    ];
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-3/4 mx-auto"
        >
            {swipeContents.map((content, idx) => (
                <SwiperSlide key={idx} className="relative">
                    <img src={content.img} alt="" />
                    <h2 className="uppercase  absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl font-bold text-white">
                        {content.title}
                    </h2>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Swipe;
