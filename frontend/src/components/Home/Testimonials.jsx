import SectionHeading from "../shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/reviews")
        .then(res=>setReviews(res.data))
        .catch(err=>console.log(err.message))
    },[])
    return (
        <div className="w-3/4 mx-auto">
            <SectionHeading
                title="What Our Clients Say"
                heading="TESTIMONIALS"
            />
            <div className="text-center ">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper "
                >
                    {reviews.map((testimonial) => (
                        <SwiperSlide key={testimonial._id}>
                            <div className="flex flex-col justify-center items-center m-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={testimonial.rating}
                                    readOnly
                                    className=""
                                />
                                <FaQuoteLeft className="text-8xl" />
                                <p>{testimonial.details}</p>
                                <p className="text-[#CD9003] uppercase text-3xl font-bold">{testimonial.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
