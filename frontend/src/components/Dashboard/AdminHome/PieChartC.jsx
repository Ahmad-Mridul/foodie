import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad, LuSoup } from "react-icons/lu";
import { RiDrinks2Fill } from "react-icons/ri";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
const PieChartC = () => {
    const data01 = [
        {
            name: "Pizza",
            value: 400,
        },
        {
            name: "Salad",
            value: 300,
        },
        {
            name: "Soup",
            value: 300,
        },
        {
            name: "Drink",
            value: 200,
        },
    ];
    const coolCalm = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div className="">
            <div className="flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-2">
                    <FaPizzaSlice className="text-[#0088FE]" />
                    <p>Pizza</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <LuSalad className="text-[#00C49F]" />
                    <p>Salad</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <LuSoup className="text-[#FFBB28]" />
                    <p>Soup</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <RiDrinks2Fill className="text-[#FF8042]" />
                    <p>Soup</p>
                </div>
            </div>
            <PieChart width={500} height={250}>
                <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    fill="#8884d8"
                    label
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={coolCalm[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PieChartC;
