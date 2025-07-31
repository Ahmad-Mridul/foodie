import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="flex">
                <div className="w-1/2 bg-[#1F2937] text-white py-10 text-center">
                    <h2 className="text-3xl font-bold">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="w-1/2 bg-[#111827] text-white py-10 flex justify-center items-center">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold">Follow US</h2>
                        <p>Join us on social media</p>
                        <div className="flex justify-between text-3xl gap-5">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-black text-white text-center">
                <p className="text-center">
                    Copyright © CulinaryCloud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
