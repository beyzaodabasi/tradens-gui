import React, { useEffect, useState } from 'react';

// MUI Style
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

import '../../../App.css';

function CardStatus({ statusInfo }) {
  // const arr = [
  //   {
  //     id: 1,
  //     value: 'Hareketli...',
  //     className: 'card-status-1',
  //     color: '#2ecc71',
  //   },
  //   {
  //     id: 2,
  //     value: 'Duraklatıldı...',
  //     className: 'card-status-2',
  //     color: '#2ecc71',
  //   },
  //   {
  //     id: 3,
  //     value: 'Yük taşımakta...',
  //     className: 'card-status-3',
  //     color: '#2ecc71',
  //   },
  //   {
  //     id: 4,
  //     value: 'Engel algılandı...',
  //     className: 'card-status-4',
  //     color: '#ff3838',
  //   },
  // ];

  const [statusData, setStatusData] = useState('Veri yükleniyor...');
  const [alert, setAlert] = useState(true);
  const [alertType, setAlertType] = useState('info');
  const [alertMessage, setAlertMessage] = useState('Yükleniyor...');

  useEffect(() => {
    if (statusInfo) {
      setStatusData(statusInfo);
      setAlert(false);
    } else {
      setStatusData('Veri yükleniyor...');
      setAlert(true);
      setAlertType('error');
      setAlertMessage('Araç durum bilgisi alınamadı!');
    }
  }, [statusInfo]);

  return (
    <div className="Card">
      <h5>Araç Durumu Bilgileri</h5>
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-between"
        alignContent="center"
        marginTop={2}
      >
        {/* {arr.map((item) => {
          return (
            <div key={item.id}>
              <p
                style={{
                  fontSize: statusInfo === item.id ? '1.5rem' : '1.1rem',
                  fontWeight: statusInfo === item.id ? 'bold' : 'normal',
                  color: statusInfo === item.id ? `${item.color}` : 'dimgray',
                  textShadow:
                    statusInfo === item.id
                      ? `0 0 1px ${item.color}`
                      : '0 0 1px dimgray',
                  // textShadow:
                  //   statusInfo === item.id ? `0 0 1px ${item.color}` : 'none',
                }}
              >
                {item.value}
              </p>
            </div>
          );
        })} */}

        <Grid item mt={2} mb={2}>
          <p>Araç Durumu: {statusInfo}</p>
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

export default CardStatus;
