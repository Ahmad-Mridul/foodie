import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../context/useAuth";


const useCart = () => {
    const {user} = useAuth();
    
    const { refetch, data:cart=[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
            const result = await axios.get(`http://localhost:3000/carts?email=${user.email}`)
            return result.data
        }
    })
    return [cart, refetch];
};

export default useCart;