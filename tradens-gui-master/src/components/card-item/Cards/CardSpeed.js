import React, { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import Gauge from 'react-svg-gauge';

function CardSpeed({ speedInfo }) {
  const [speed, setSpeed] = useState(0);
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (speedInfo) {
      if (speedInfo > 100) {
        setSpeed(speedInfo);
        setAlert(true);
        setAlertType('error');
        setAlertMessage('Hız çok yüksek!');
      } else {
        setSpeed(speedInfo);
        setAlert(false);
      }
    } else {
      setSpeed(0);
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Hız bilgisi alınamadı!');
    }
  }, [speedInfo]);

  return (
    <div className="Card">
      <h5>Araç Hız Bilgileri</h5>
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item mt={2} mb={2}>
          <Gauge
            className="Gauge"
            value={speed}
            valueLabelStyle={{
              fontSize: 18,
              fill: 'darkslateblue',
            }}
            valueFormatter={(value) => `${value} rpm`}
            max={100}
            width={140}
            height={90}
            color="#2ecc71"
            topLabelStyle={{
              fontSize: '0px',
            }}
            minMaxLabelStyle={{
              fontSize: '0px',
            }}
          />
        </Grid>

        {alert && (
          <Alert
            variant="filled"
            severity={alertType}
            style={{
              padding: '0px',
              margin: '0px',
              width: '200px',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              backgroundColor:
                alertType === 'error' ? '#f44336' : 'darkslateblue',
            }}
          >
            {alertMessage}
          </Alert>
        )}
      </Grid>
    </div>
  );
}

export default CardSpeed;
