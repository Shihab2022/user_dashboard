import React, { PureComponent } from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const chartData=[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
    {
        "month": "Sep",
        "investment": 500000,
        "sell": 60,
        "revenue": 6000
    },
    {
        "month": "Oct",
        "investment": 800000,
        "sell": 690,
        "revenue": 5000
    } ,
    {
        "month": "Nov",
        "investment": 550000,
        "sell": 570,
        "revenue": 63000
    },
    {
        "month": "Dec",
        "investment": 400000,
        "sell": 770,
        "revenue": 63000
    }
]


const ChartDashboard = () => {
   
 
    return (
        <AreaChart
        width={600}
        height={500}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="sell"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    );
};

export default ChartDashboard;