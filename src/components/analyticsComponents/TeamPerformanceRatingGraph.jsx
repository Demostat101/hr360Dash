import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const data = [
  { name: 'Sales', value: 700, color:'#176B87' },
  { name: 'Hr', value: 400, color:'#B4D4FF' },
  { name: 'Finance', value: 300, color:'#F4D35E' },
  { name: 'IT', value: 50, color:'#D54C5C' },
];

const COLORS = ['#176B87', '#B4D4FF', '#F4D35E', '#D54C5C']

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TeamPerformanceRatingGraph = () => {
  return (
     <div className='min-w-[100%] h-full'>
        <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={185}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TeamPerformanceRatingGraph
