import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
    const [users, refetch] = useUsers();
    const handleRoleChange = async (_id, newRole) => {
        await axios
            .patch(`http://localhost:3000/users/${_id}`, { role: newRole })
            .then((res) => {
                console.log(res.data);
            });
        refetch();
    };
    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3000/users/${_id}`)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err.message));
                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success",
                });
                refetch();
            }
        });
    };
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table mt-5">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-400 text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoUrl}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {user.displayName}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    <select
                                        className="btn bg-orange-400"
                                        name="role"
                                        value={user?.role}
                                        id=""
                                        onChange={(e) =>
                                            handleRoleChange(
                                                user._id,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {user?.role === "admin" ? (
                                            <>
                                                <option value="admin">
                                                    admin
                                                </option>
                                                <option value="user">
                                                    user
                                                </option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="user">
                                                    user
                                                </option>
                                                <option value="admin">
                                                    admin
                                                </option>
                                            </>
                                        )}
                                    </select>
                                </td>
                                <th>
                                    <button
                                        className="btn btn-ghost"
                                        onClick={() =>
                                            handleDeleteUser(user._id)
                                        }
                                    >
                                        <MdDeleteForever className="text-3xl text-red-700" />
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

export default AllUsers;
