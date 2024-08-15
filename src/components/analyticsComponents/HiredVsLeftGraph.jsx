import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer,ReferenceLine } from 'recharts';

const data = [
  {
    name: 'July',
    Hired: 20,
    Left: -10  },
  {
    name: 'Aug',
    Hired: 13,
    Left: -2,
  },
  {
    name: 'Sept',
    Hired:15,
    Left: -10,
  },
  {
    name: 'Oct',
    Hired: 20,
    Left: -12,
  },
  {
    name: 'Nov',
    Hired: 22,
    Left: 0,
  },
  {
    name: 'Dec',
    Hired: 18,
    Left: -10,
  },
  {
    name: 'Jan',
    Hired: 14,
    Left: -10,
  },
  {
    name: 'Feb',
    Hired: 18,
    Left: -5,
  },
  {
    name: 'Mar',
    Hired: 28,
    Left:0
  },
  {
    name: 'Apr',
    Hired: 18,
    Left: -8,
  },
  {
    name: 'May',
    Hired: 8,
    Left: -10,
  },
];

const HiredVsLeftGraph = () => {
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={10} data={data} stackOffset="sign">
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend/>
        <ReferenceLine y={0} stroke="#DBDADA" />
        <Bar dataKey="Hired" fill="#86B6F6" stackId="stack"/>
        <Bar dataKey="Left" fill="#F4D35E" stackId="stack"/>
      </BarChart>
    </ResponsiveContainer>
    </>
  )
}

export default HiredVsLeftGraph
