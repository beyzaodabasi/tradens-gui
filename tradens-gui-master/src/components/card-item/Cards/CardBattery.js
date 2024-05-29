import React, { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import BatteryGauge from 'react-battery-gauge';

function CardBattery({ batteryInfo }) {
  const [battery, setBattery] = useState(0);
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (batteryInfo) {
      if (batteryInfo < 15) {
        setBattery(batteryInfo);
        setAlert(true);
        setAlertType('error');
        setAlertMessage('Pil kritik!');
      } else {
        setBattery(batteryInfo);
        setAlert(false);
      }
    } else {
      setBattery(0);
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Yük bilgisi alınamadı!');
    }
  }, [batteryInfo]);

  return (
    <div className="Card">
      <h5>Araç Batarya Bilgileri</h5>
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item>
          <BatteryGauge
            style={{
              width: '120px',
              height: '120px',
            }}
            customization={{
              batteryBody: {
                strokeWidth: 2,
                cornerRadius: 6,
                fill: 'none',
                strokeColor: 'darkslateblue',
              },
              batteryCap: {
                fill: 'none',
                strokeWidth: 2,
                strokeColor: 'darkslateblue',
                cornerRadius: 2,
                capToBodyRatio: 0.4,
              },
              batteryMeter: {
                fill: 'darkslateblue',
                lowBatteryValue: 25,
                lowBatteryFill: 'red',
                outerGap: 2,
                noOfCells: 1,
                interCellsGap: 1,
              },
              readingText: {
                lightContrastColor: '#111',
                darkContrastColor: '#fff',
                lowBatteryColor: 'red',
                fontFamily: 'Helvetica',
                fontSize: 16,
                showPercentage: true,
              },
            }}
            value={battery}
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

export default CardBattery;
