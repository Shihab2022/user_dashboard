import React from 'react';
import { BarChart, Bar,  XAxis,  CartesianGrid,  ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Feb',
      uv: 4000,
      pv: 2400,

    },
    {
      name: 'Mar',
      uv: 3000,
      pv: 1398,

    },
    {
      name: 'Apr',
      uv: 2000,
      pv: 9800,

    },
    {
      name: 'May',
      uv: 2780,
      pv: 3908,

    },
    {
      name: 'Jun',
      uv: 1890,
      pv: 4800,

    },
    {
      name: 'Jul',
      uv: 2390,
      pv: 3400,

    },
    {
      name: 'Aug',
      uv: 2490,
      pv: 4300,

    },
    {
        name: 'Sep',
        uv: 3490,
        pv: 4300,

      },
      {
        name: 'Oct',
        uv: 3590,
        pv: 300,

      },
      {
        name: 'Nov',
        uv: 4090,
        pv: 5300,

      },
      {
        name: 'Dec',
        uv: 3490,
        pv: 4300,
      },
  ];

const LineChart = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right"  dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default LineChart;