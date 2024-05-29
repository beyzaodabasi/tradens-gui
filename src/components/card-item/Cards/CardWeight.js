import React, { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';
import Gauge from 'react-svg-gauge';

function CardWeight({ weightInfo }) {
  const [weight, setWeight] = useState(0);
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (weightInfo != null) {
      if (weightInfo > 200) {
        setWeight(weightInfo);
        setAlert(true);
        setAlertType('error');
        setAlertMessage('Ağırlık çok yüksek!');
      } else {
        setWeight(weightInfo);
        setAlert(false);
      }
    } else {
      setWeight(0);
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Yük bilgisi alınamadı!');
    }
  }, [weightInfo]);

  return (
    <div className="Card">
      <h5>Yük Bilgileri</h5>
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item mt={2} mb={2}>
          <Gauge
            value={weight}
            valueLabelStyle={{
              fontSize: 18,
              fill: 'darkslateblue',
            }}
            valueFormatter={(value) => `${value} kg`}
            max={120}
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

export default CardWeight;
