import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";
import { salesData } from "./GraphData";
const halfsales = salesData.slice(0, 6);

const Graph1 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={15} data={halfsales} >
        <XAxis dataKey="month" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="Employees working" fill="#B4D4FF" />
        <Bar dataKey="Employees on leave" fill="#F4D35E" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph1;
