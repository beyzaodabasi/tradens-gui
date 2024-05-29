import React, { useEffect, useState } from 'react';

//Recharts
import { Legend, Area, AreaChart, XAxis, YAxis, Tooltip } from 'recharts';

//Mui
import Grid from '@mui/material/Grid';

import '../../App.css';

export default function StatSpeed({ logs }) {
  return (
    <Grid item className="CardCharts">
      <AreaChart
        width={730}
        height={250}
        data={logs}
        margin={{ top: 14, right: 60, left: 0, bottom: 14 }}
      >
        <defs>
          <linearGradient id="speedColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#8884d8" stopOpacity={1} />
            <stop offset="100%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="cratedTime"
          tickLine={false}
          tick={{
            fontSize: 14,
            fontWeight: 'bold',
            fill: 'darkslateblue',
          }}
        />
        <YAxis
          type="number"
          tickLine={false}
          tick={{
            fontSize: 14,
            fontWeight: 'bold',
            fill: 'darkslateblue',
          }}
          domain={[0, Math.max(...logs.map((log) => log.speed))]}
        />
        <Tooltip
          separator=": "
          contentStyle={{
            borderRadius: '8px',
            borderColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
          labelStyle={{
            color: 'white',
          }}
          itemStyle={{
            color: 'white',
            backgroundColor: '#8884d8',
            borderRadius: '5px',
            padding: '5px',
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Area
          type="monotone"
          dataKey="speed"
          fill="url(#speedColor)"
          stroke="#8884d8"
          dot={true}
          activeDot={{ r: 8 }}
          unit=" m/s"
          name="Speed"
        />
      </AreaChart>
    </Grid>
  );
}
