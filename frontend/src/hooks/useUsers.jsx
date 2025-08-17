import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axios.get("http://localhost:3000/users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            });
            return result.data;
        },
    });
    return [users, refetch];
};

export default useUsers;
