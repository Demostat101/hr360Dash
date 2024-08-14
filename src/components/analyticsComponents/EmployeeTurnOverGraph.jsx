import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Finance',
    Voluntory: 20,
    Involuntory: 30,
    Retired: 24,
  },
  {
    name: 'Hr',
    Voluntory: 24,
    Involuntory: 13,
    Retired: 22,
  },
  {
    name: 'Sales',
    Voluntory: 20,
    Involuntory:25,
    Retired: 30,
  },
  {
    name: 'IT',
    Voluntory: 20,
    Involuntory: 28,
    Retired: 30,
  }
];




const EmployeeTurnOverGraph = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={20} data={data}>
        <XAxis dataKey="name" />
    
        <Tooltip />
        <Legend />
        <Bar dataKey="Voluntory" fill="#176B87" />
        <Bar dataKey="Involuntory" fill="#86B6F6" />
        <Bar dataKey="Retired" fill="#F4D35E" />
      </BarChart>
    </ResponsiveContainer>
    </>
  )
}

export default EmployeeTurnOverGraph
