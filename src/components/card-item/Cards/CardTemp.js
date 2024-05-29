import React, { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Gauge from 'react-svg-gauge';

function CardTemp({ tempInfo }) {
  const [temp, setTemp] = useState(0);
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (tempInfo) {
      if (tempInfo > 125) {
        setTemp(tempInfo);
        setAlert(true);
        setAlertType('error');
        setAlertMessage('Sıcaklık çok yüksek!');
      } else {
        setTemp(tempInfo);
        setAlert(false);
      }
    } else {
      setTemp(0);
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Sıcaklık bilgisi alınamadı!');
    }
  }, [tempInfo]);

  return (
    <div className="Card">
      <h5>Sıcaklık Bilgileri</h5>
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
            value={temp}
            valueLabelStyle={{
              fontSize: 18,
              fill: 'darkslateblue',
            }}
            valueFormatter={(value) => `${value} °C`}
            max={100}
            width={140}
            height={90}
            color="#e74c3c"
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

export default CardTemp;
