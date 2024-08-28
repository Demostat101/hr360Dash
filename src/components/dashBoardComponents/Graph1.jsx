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
      <BarChart barCategoryGap={15} data={halfsales}>
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={{ stroke: "#ECEEF6" }}
          tick={{ fill: "black", fontSize: "13.96px", fontWeight: "500" }}
        />
        <YAxis
          tickLine={false}
          tick={false}
          width={1}
          axisLine={{ stroke: "#ECEEF6" }}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Employees working" fill="#B4D4FF" />
        <Bar dataKey="Employees on leave" fill="#F4D35E" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph1;
