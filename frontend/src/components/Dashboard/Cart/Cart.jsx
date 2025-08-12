import axios from "axios";
import useCart from "../../../hooks/useCart";
import SectionHeading from "../../shared/SectionHeading";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/carts/${_id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed",
                                text: "Your item has been removed from the cart.",
                                icon: "success",
                            });
                            refetch();
                        }
                    });
            }
        });
    };
    return (
        <div>
            <SectionHeading title="My Cart" heading="WANNA ADD MORE?" />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-cinzel">
                    Total orders: {cart.length}
                </h2>
                <h2 className="text-2xl font-bold font-cinzel">
                    total price: ${totalPrice}
                </h2>
                <button className={`${totalPrice===0?"hidden":""} btn btn-warning `}>PAY</button>
            </div>
            <div className="overflow-x-auto pt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-yellow-600 text-white">
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <img
                                        src={item.image}
                                        alt="Avatar Tailwind CSS Component"
                                        className="rounded-2xl w-30"
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn bg-red-700"
                                    >
                                        <MdDeleteForever className="text-2xl text-white" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
