import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area ,linearGradient} from 'recharts';
import useGetChartData from '../hooks/GetChartData';
const data = [
    {
      "name": "Page A",
      "uv": 1300,
      "pv":1000,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 1400,
      "pv": 1100,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 1500,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 1350,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 1400,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 1400,
      "pv": 1100,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 1300,
      "pv": 1000,
      "amt": 2100
    }
  ]
const AreaCharts = () => {
    const [chartData]=useGetChartData()
    return (
        <AreaChart width={350} height={250} data={data}
        margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    );
};

export default AreaCharts;