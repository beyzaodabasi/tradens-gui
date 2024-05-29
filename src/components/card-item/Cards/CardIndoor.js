import React, { useEffect, useState } from 'react';

// MUI Style
import Grid from '@mui/material/Grid';

import Alert from '@mui/material/Alert';

import '../../../App.css';

function CardIndoor({ indoorInfo }) {
  const [info, setInfo] = useState({
    xcoordinate: 'Veri getiriliyor...',
    ycoordinate: 'Veri getiriliyor...',
  });
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (indoorInfo) {
      setInfo(indoorInfo);
      setAlert(false);
    } else {
      setInfo({
        xcoordinate: 'Veri getiriliyor...',
        ycoordinate: 'Veri getiriliyor...',
      });
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Indoor bilgisi alınamadı!');
    }
  }, [indoorInfo]);

  return (
    <div className="Card">
      <h5>Indoor Mapping</h5>
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
        marginTop={2}
      >
        <Grid item mt={2} mb={2}>
          <p>X Koordinatı: {info.xcoordinate}</p>
          <p>Y Koordinatı: {info.ycoordinate}</p>
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

export default CardIndoor;
