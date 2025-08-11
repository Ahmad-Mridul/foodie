import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const Charts = () => {
    const data = [
        {
            name: "Dessert",
            TotalSale: 2400,
        },
        {
            name: "Pizza",
            TotalSale: 1398,
        },
        {
            name: "Salad",
            TotalSale: 9800,
        },
        {
            name: "Drinks",
            TotalSale: 3908,
        },
        {
            name: "Soup",
            TotalSale: 4800,
        }
    ];

    return (
        <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="TotalSale" fill="#8884d8" />
        </BarChart>
    );
};

export default Charts;
