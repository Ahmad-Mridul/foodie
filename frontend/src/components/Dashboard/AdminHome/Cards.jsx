import { FaBagShopping, FaMoneyBill, FaProductHunt, FaTruck, FaUsers } from "react-icons/fa6";
const Cards = () => {
    return (
        <div className="flex justify-around items-center gap-5 mt-5">
            <div className="flex flex-grow items-center justify-center gap-5 rounded-xl p-5 bg-gradient-to-r from-purple-500 to-pink-200">
                <FaMoneyBill className="text-4xl text-white" />
                <div className="">
                    <p className="text-2xl font-bold text-white">
                        $<span>1000</span>
                    </p>
                    <p className="text-2xl font-bold text-white">Revenue</p>
                </div>
            </div>
            <div className="flex flex-grow items-center justify-center gap-5 rounded-xl p-5 bg-gradient-to-r from-yellow-700 to-yellow-200">
                <FaUsers className="text-4xl text-white" />
                <div className="">
                    <p className="text-2xl font-bold text-white">1500</p>
                    <p className="text-2xl font-bold text-white">Customers</p>
                </div>
            </div>
            <div className="flex flex-grow items-center justify-center gap-5 rounded-xl p-5 bg-gradient-to-r from-pink-600 to-pink-200">
                <FaBagShopping className="text-4xl text-white" />
                <div className="">
                    <p className="text-2xl font-bold text-white">103</p>
                    <p className="text-2xl font-bold text-white">Products</p>
                </div>
            </div>
            <div className="flex flex-grow items-center justify-center gap-5 rounded-xl p-5 bg-gradient-to-r from-purple-500 to-pink-200">
                <FaTruck className="text-4xl text-white" />
                <div className="">
                    <p className="text-2xl font-bold text-white">500</p>
                    <p className="text-2xl font-bold text-white">Orders</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
