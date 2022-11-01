import React from 'react';
import { PieChart, Pie,Cell } from 'recharts';
const data = [
    { name: 'Group A', value: 500 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 300 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PiCharts = () => {
    return (
        <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={180}
          cy={120}
          innerRadius={70}
          outerRadius={97}
          fill="#8884d8"
          
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
};

export default PiCharts;