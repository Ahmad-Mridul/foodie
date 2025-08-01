import { useState } from "react";
import ProductCard from "../shared/ProductCard";

const TabManagement = () => {
    const [value, setValue] = useState(null);

    return (
        <div className="space-y-10 mx-auto text-center">
            <div className="space-x-5">
                <button
                    className="btn btn-primary uppercase"
                    onClick={() => setValue("salad")}
                >
                    salads
                </button>
                <button
                    className="btn btn-primary uppercase"
                    onClick={() => setValue("pizza")}
                >
                    pizzas
                </button>
                <button
                    className="btn btn-primary uppercase"
                    onClick={() => setValue("soup")}
                >
                    soups
                </button>
                <button
                    className="btn btn-primary uppercase"
                    onClick={() => setValue("drink")}
                >
                    drinks
                </button>
                <button
                    className="btn btn-primary uppercase"
                    onClick={() => setValue("dessert")}
                >
                    desserts
                </button>
            </div>
            <ProductCard category={value}/>
        </div>
    );
};

export default TabManagement;
