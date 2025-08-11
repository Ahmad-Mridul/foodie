import useCart from "../../../hooks/useCart";
import SectionHeading from "../../shared/SectionHeading";

const Cart = () => {
    const [cart] = useCart();
    return (
        <div>
            <SectionHeading title="My Cart" heading="WANNA ADD MORE?" />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-cinzel">
                    Total orders: {cart.length}
                </h2>
                <h2 className="text-2xl font-bold font-cinzel">
                    total price: $88.2
                </h2>
                <button className="btn btn-warning ">PAY</button>
            </div>
            
        </div>
    );
};

export default Cart;
