import React, { useEffect, useState } from 'react';
import API from '../../api'; //AXIOS BASEURL

import LogsComponent from '../logs/LogsComponent';
import StatSpeed from '../logs/StatSpeed';
import StatWeight from '../logs/StatWeight';
import StatBattery from '../logs/StatBattery';

import '../../App.css';
import { Alert, Grid } from '@mui/material';

export default function Logs() {
  const [alertError, setAlertError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');
  const [time, setTime] = useState(0);
  const [logs, setLogs] = useState([]);

  setTimeout(() => setTime(time + 1), 1000);
  //create async useEffect
  useEffect(() => {
    (async () => {
      setAlertError(true);
      await API.get(`sensor/verileri`)
        .then((resp) => {
          setLogs(resp.data);
          setAlertError(false);
          console.table(resp.data);
          setAlertMessage('Kayıtlar getirildi!');
        })
        .catch((err) => {
          setLogs([]);
          setAlertError(true);
          console.log('Logs veriler get edilemedi: ', err.message);
          setAlertMessage(`Kayıtlar getirilemedi! Hata: ${err.message}`);
        });
    })();
  }, [time]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        style={{
          marginTop: '2rem',
        }}
      >
        <Alert
          icon={false}
          severity={alertError ? 'error' : 'success'}
          message={alertMessage}
          style={{
            backgroundColor: alertError ? '#f44336' : 'darkslateblue',
            color: 'white',
            fontSize: '1rem',
          }}
        >
          {alertMessage}
        </Alert>
      </Grid>
      <Grid item>
        <LogsComponent logs={logs} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={'50px'}
      >
        <Grid item>
          <StatSpeed logs={logs} />
        </Grid>
        <Grid item>
          <StatWeight logs={logs} />
        </Grid>
        <Grid item>
          <StatBattery logs={logs} />
        </Grid>
      </Grid>
    </Grid>
  );
}
