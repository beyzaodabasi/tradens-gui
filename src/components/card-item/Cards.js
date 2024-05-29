import React, { useState, useEffect } from 'react';
import API from '../../api'; //AXIOS BASEURL

//CSS
import Grid from '@mui/material/Grid';

//Cards
import CardBattery from './Cards/CardBattery';
import CardSpeed from './Cards/CardSpeed';
import CardTemp from './/Cards/CardTemp';
import CardWeight from './Cards/CardWeight';
import CardQR from './Cards/CardQR';
import CardStatus from './Cards/CardStatus';
//Cards Route, Timer, Control
// import CardRoute from './Cards/CardRoute';
// import CardRouteSecond from './Cards/CardRouteSecond';
import CardRouteThird from './Cards/CardRouteThird';
import Timer from './Cards/Timer';
import CardControl from './Cards/CardControl';
import CardPermission from './Cards/CardPermission';
import CardMap from './Cards/CardMap';
import CardMap2 from './Cards/CardMap2';
import CardIndoor from './Cards/CardIndoor';

function Cards() {
  const [data, setData] = useState(null);
  const [batteryInfo, setBatteryInfo] = useState(null);
  const [speedInfo, setSpeedInfo] = useState(null);
  const [statusInfo, setStatusInfo] = useState(null);
  const [weightInfo, setWeightInfo] = useState(null);
  const [tempInfo, setTempInfo] = useState(null);
  const [qrInfo, setQrInfo] = useState(null);
  const [time, setTime] = useState(0);
  const [indoorInfo, setIndoorInfo] = useState(null);

  setTimeout(() => setTime(time + 1), 1000);

  useEffect(() => {
    (async () => {
      await API.get(`sensor/sonveri`)
        .then(async (response) => {
          console.log('GET RESPONSE: ', response.data);
          setData(JSON.stringify(response.data[0]));
          setBatteryInfo(parseInt(response.data[0].batteryLevel));
          setSpeedInfo(JSON.stringify(response.data[0].speed));
          setWeightInfo(parseInt(response.data[0].loadCell));
          setTempInfo(parseInt(response.data[0].ecuTemperature));
        })
        .catch((error) => console.log(error.message));
      await API.get(`qr/son`)
        .then((resp) => {
          setQrInfo(resp.data[0]);
        })
        .catch((error) => console.log(error.message));
      await API.get(`durumu`)
        .then((respDurum) => {
          setStatusInfo(respDurum.data[0].arac_durumu);
        })
        .catch((error) => console.log(error.message));
      await API.get(`konum/son`)
        .then((respKonum) => {
          setIndoorInfo(respKonum.data[0]);
        })
        .catch((error) => console.log(error.message));
    })();
  }, [time]);

  const permissionInfo = {
    mobile: false,
    controller: false,
    web: true,
  };

  return (
    // Cards
    <div>
      {/* Cards-Wrapper */}
      <Grid
        container
        direction="row"
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={2}
      >
        <CardBattery batteryInfo={batteryInfo} />
        <CardTemp tempInfo={tempInfo} />
        <CardSpeed speedInfo={speedInfo} />
        <CardWeight weightInfo={weightInfo} />
        <CardStatus statusInfo={statusInfo} />
        <CardQR qrInfo={qrInfo} />
        <CardPermission permissionInfo={permissionInfo} />
        <CardIndoor indoorInfo={indoorInfo} />
      </Grid>
      {/* Control, Route ve Timer Row */}
      <Grid
        container
        direction="column"
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={2}
        marginBottom={2}
      >
        {/* <CardRoute /> */}
        {/* <CardRouteSecond /> */}
        <CardRouteThird />
        <CardMap _qrInfo={qrInfo} />
        <CardMap2 />
        <CardControl />
        <Timer />
      </Grid>
      {/* Control, Route ve Timer Row End */}
    </div>
  );
}

export default Cards;
