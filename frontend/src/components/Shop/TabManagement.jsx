import { useState } from "react";
import ProductCard from "../shared/ProductCard";

const TabManagement = () => {
    const [value, setValue] = useState(null);

    return (
        <div className="space-y-10 mx-auto text-center">
            <div className="space-x-5">
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("")}
                >
                    all
                </button>
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("salad")}
                >
                    salads
                </button>
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("pizza")}
                >
                    pizzas
                </button>
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("soup")}
                >
                    soups
                </button>
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("drinks")}
                >
                    drinks
                </button>
                <button
                    className="btn hover:shadow-xl hover:bg-transparent hover:border-[#B58130] uppercase bg-[#B58130]"
                    onClick={() => setValue("dessert")}
                >
                    desserts
                </button>
            </div>
            <ProductCard category={value} />
        </div>
    );
};

export default TabManagement;
