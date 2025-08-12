import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import useMenus from "../../hooks/useMenus";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../hooks/useCart";
const ProductCard = ({ category = null, recommended = false }) => {
    const items = useMenus({ category: category, recommended: recommended });
    const { user } = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    const handleAddtoCart = (item) => {
        if (user && user?.email) {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                image: item.image,
                price: item.price,
            };
            axios.post("http://localhost:3000/carts", cartItem).then((res) => {
                if (res.data.insertedId) {
                    Toast.fire({
                        icon: "success",
                        title: "added to cart successfully",
                    });
                    refetch();
                }
            });
        } else {
            Swal.fire({
                title: "Want add to cart?",
                text: "Please log in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
            {items.map((item, idx) => (
                <div className="card bg-[#F3F3F3]  shadow-sm" key={idx}>
                    <figure>
                        <img src={item.image} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <div className="card-actions justify-center">
                            <button
                                onClick={() => handleAddtoCart(item)}
                                className="btn border-0 bg-gray-200 hover:bg-[#1F2937] hover:border-0 uppercase border-b-2 border-[#BB8506] text-[#BB8506] rounded-xl"
                            >
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
