import React from 'react';

//Recharts
import { Legend, Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';

//Mui
import Grid from '@mui/material/Grid';

import '../../App.css';

export default function StatBattery({ logs }) {
  return (
    <Grid item className="CardCharts">
      <BarChart
        width={500}
        height={300}
        data={logs}
        margin={{ top: 14, right: 48, left: 0, bottom: 14 }}
      >
        <defs>
          <linearGradient id="batteryColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#2ecc71" stopOpacity={1} />
            <stop offset="100%" stopColor="#27ae60" stopOpacity={1} />
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
          domain={[0, Math.max(...logs.map((log) => log.batteryLevel))]}
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
            backgroundColor: '#27ae60',
            borderRadius: '5px',
            padding: '5px',
          }}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar
          dataKey="batteryLevel"
          fill="url(#batteryColor)"
          stroke="rgba(255, 255, 255, 0)"
          unit="%"
          name="Battery Level"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </Grid>
  );
}
