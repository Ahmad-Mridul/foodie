import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import { TbClockHour3Filled } from "react-icons/tb";
import SectionHeading from "../shared/SectionHeading";

const Address = () => {
    return (
        <div className="w-3/4 mx-auto">
            <SectionHeading title="Visit Us" heading="OUR LOCATION" />
            <div className="flex items-stretch justify-center gap-5">
                {/* Card 1 */}
                <div className="card shadow-xl flex flex-col flex-1">
                    <div className="bg-[#D1A054] py-3 flex justify-center text-xl">
                        <FaPhoneVolume />
                    </div>
                    <div className="ps-5 pe-5 pb-5 bg-white text-black h-full flex flex-col">
                        <div className="bg-[#F3F3F3] p-10 flex-1 flex flex-col justify-center text-center">
                            <h2 className="text-2xl font-bold">PHONE</h2>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card shadow-xl flex flex-col flex-1">
                    <div className="bg-[#D1A054] py-3 flex justify-center text-xl">
                        <IoMdPin />
                    </div>
                    <div className="ps-5 pe-5 pb-5 bg-white text-black h-full flex flex-col">
                        <div className="bg-[#F3F3F3] p-10 flex-1 flex flex-col justify-center text-center">
                            <h2 className="text-2xl font-bold">ADDRESS</h2>
                            <p>123 Main Street, City Name</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card shadow-xl flex flex-col flex-1">
                    <div className="bg-[#D1A054] py-3 flex justify-center text-xl">
                        <TbClockHour3Filled />
                    </div>
                    <div className="ps-5 pe-5 pb-5 bg-white text-black h-full flex flex-col">
                        <div className="bg-[#F3F3F3] p-10 flex-1 flex flex-col justify-center text-center">
                            <h2 className="text-2xl font-bold">
                                WORKING HOURS
                            </h2>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
