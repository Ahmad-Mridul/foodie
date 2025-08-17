import useAuth from "../../../context/useAuth";
import Cards from "./Cards";
import Charts from "./Charts";
import PieChartC from "./PieChartC";

const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div className="space-y-5">
            <h2 className="text-3xl font-bold font-cinzel">
                Hi <span className="text-orange-400">{user?.displayName}</span>, Welcome Back!
            </h2>
            <Cards />
            <div className="flex">
                <Charts />
                <PieChartC/>
            </div>
        </div>
    );
};

export default AdminHome;
