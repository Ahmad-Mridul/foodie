import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane } from "react-icons/fa6";
const ContactForm = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please complete the reCAPTCHA");
            return;
        }
    };
    return (
        <div className="w-3/4 mx-auto">
            <SectionHeading title="Send Us a Message" heading="CONTACT FORM" />
            <div className="contact-form bg-[#F3F3F3] p-10">
                <form onSubmit={handleSubmit} className="space-y-5 text-black">
                    <div className="flex w-full gap-5">
                        <div className="w-1/2">
                            <label htmlFor="">Name*</label>
                            <br />
                            <input
                                placeholder="enter your name"
                                type="text"
                                name="name"
                                id="fullname"
                                className="border w-full"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="">Email*</label>
                            <br />
                            <input
                                placeholder="enter your email"
                                name="email"
                                type="email"
                                className="border w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="">Phone*</label>
                        <br />
                        <input
                            placeholder="enter your phone number"
                            name="number"
                            type="tel"
                            className="border w-full"
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="">Message*</label>
                        <br />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Type your message"
                            rows="10"
                            className="border w-full"
                            required
                        />
                    </div>

                    {/* ✅ reCAPTCHA */}
                    <ReCAPTCHA
                        sitekey="6LdOmJYrAAAAAK2IpM8YmPOqlJWo0U4m8B4IYjNp"
                        onChange={handleCaptchaChange}
                    />

                    {/* ✅ Submit button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn px-10 bg-gradient-to-r from-[#835D23] to-[#B58130] hover:bg-transparent hover:border-orange-300 border transition duration-500 text-white"
                        >
                            Send Message <FaPaperPlane />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
