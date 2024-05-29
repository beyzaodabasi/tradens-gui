import React, { useEffect, useState } from 'react';

//MuiTable
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import '../../App.css';

export default function LogsComponent({ logs }) {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Sütünlar
  const [tableCells, setTableCells] = useState([
    { id: 'id', label: 'Id' },
    { id: 'rightMotorSpeed', label: 'Right Motor Speed' },
    { id: 'leftMotorSpeed', label: 'Left Motor Speed' },
    { id: 'batteryLevel', label: 'Battery Level' },
    { id: 'speed', label: 'Speed' },
    { id: 'loadCell', label: 'Load Cell' },
    { id: 'forwardSensor', label: 'Forward Sensor' },
    { id: 'leftSensor', label: 'Left Sensor' },
    { id: 'rightSensor', label: 'Right Sensor' },
    { id: 'ecuTemperature', label: 'ECU Temperature' },
    { id: 'leftMotorCurrentLevel', label: 'Left Motor Current Level' },
    { id: 'rightMotorCurrentLevel', label: 'Right Motor Current Level' },
    { id: 'batteryCurrentLevel', label: 'Battery Current Level' },
    { id: 'magnometer', label: 'Magno Meter' },
    { id: 'direction', label: 'Direction' },
    { id: 'fanState', label: 'Fan State' },
    { id: 'carLights', label: 'Car Lights' },
    { id: 'task', label: 'Task' },
    { id: 'cratedTime', label: 'Crated Time' },
  ]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item mt={2} mb={2}>
        <h1
          className="LogsHeader"
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'black',
            textShadow: '0px 0px 2px black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Geçmiş Kayıtlar
        </h1>
      </Grid>
      <Grid item mt={2}>
        <TableContainer
          component={Paper}
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
          }}
          sx={{
            width: `${screenWidth - 50}px`,
            height: `${screenHeight / 1.5}px`,
          }}
        >
          <Table
            size="small"
            aria-label="a dense table sticy header"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                {tableCells.map((cell) => (
                  <TableCell
                    align="center"
                    key={cell.id}
                    style={{
                      color: 'darkslateblue',
                      fontWeight: 'bold',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {cell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((item) => (
                <TableRow hover key={item.id}>
                  {tableCells.map((cell) => (
                    <TableCell
                      size="small"
                      align="center"
                      variant="body"
                      style={{
                        color: 'white',
                      }}
                      key={cell.id}
                    >
                      {JSON.stringify(item[cell.id])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
