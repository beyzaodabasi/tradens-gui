import React, { useState, useEffect } from 'react';
import axios from 'axios';

import routeImage from '../../../assets/images/Route.svg';

import TextField from '@mui/material/TextField';
//Alert Package
import Alert from '@mui/material/Alert';

//Mui
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

//Awesome Button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-red.css';

function CardRouteThird() {
  const [isHovering, setIsHovering] = useState(false);
  const [routeList, setRouteList] = useState([]);
  const [routeList2, setRouteList2] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [finalList2, setFinalList2] = useState([]);
  const [seperatedList, setSeperatedList] = useState();
  const [countList, setCountList] = useState(['0', '0', '0', '0']);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [successAlertMessage, setSuccessAlertMessage] = useState('');
  const [errorAlertMessage, setErrorAlertMessage] = useState('');
  const [spinner, setSpinner] = useState(false);

  const mapButtonList = [
    //Üst Kenar
    {
      id: 0,
      name: '0',
      value: 0,
      className: 'Zone Zone0',
    },
    {
      id: 1,
      name: '1',
      value: 1,
      className: 'Zone Zone1',
    },
    {
      id: 2,
      name: '2',
      value: 2,
      className: 'Zone Zone2',
    },
    {
      id: 3,
      name: '3',
      value: 3,
      className: 'Zone Zone3',
    },
    {
      id: 4,
      name: 'S1',
      value: 3,
      className: 'Zone Start1',
    },
    {
      id: 5,
      name: '5',
      value: 5,
      className: 'Zone Zone5',
    },
    {
      id: 6,
      name: '4',
      value: 4,
      className: 'Zone Zone6',
    },
    {
      id: 7,
      name: '5',
      value: 5,
      className: 'Zone Zone7',
    },
    {
      id: 8,
      name: '6',
      value: 6,
      className: 'Zone Zone8',
    },

    //Alt kenar
    {
      id: 9,
      name: '7',
      value: 7,
      className: 'Zone Zone9',
    },
    {
      id: 10,
      name: '8',
      value: 8,
      className: 'Zone Zone10',
    },
    {
      id: 11,
      name: '9',
      value: 9,
      className: 'Zone Zone11',
    },
    {
      id: 12,
      name: '10',
      value: 10,
      className: 'Zone Zone12',
    },
    {
      id: 13,
      name: 'S2',
      value: 10,
      className: 'Zone Start2',
    },
    {
      id: 14,
      name: '14',
      value: 14,
      className: 'Zone Zone14',
    },
    {
      id: 15,
      name: '11',
      value: 11,
      className: 'Zone Zone15',
    },
    {
      id: 16,
      name: '12',
      value: 12,
      className: 'Zone Zone16',
    },
    {
      id: 17,
      name: '13',
      value: 13,
      className: 'Zone Zone17',
    },
  ];

  const mapButtonListMiddle = [
    //Orta Alan
    {
      id: 28,
      name: 'A',
      value: '1',
      className: 'Zone ZoneA',
    },
    {
      id: 29,
      name: 'B',
      value: '2',
      className: 'Zone ZoneB',
    },
    {
      id: 30,
      name: 'C',
      value: '4',
      className: 'Zone ZoneC',
    },
    {
      id: 31,
      name: 'D',
      value: '5',
      className: 'Zone ZoneD',
    },
  ];

  const mapButtonListOdd = [
    {
      id: 18,
      name: '18',
      value: 18,
      className: 'Zone Zone18',
    },
    {
      id: 19,
      name: '19',
      value: 19,
      className: 'Zone Zone19',
    },
    {
      id: 20,
      name: '20',
      value: 20,
      className: 'Zone Zone20',
    },
    {
      id: 21,
      name: '21',
      value: 21,
      className: 'Zone Zone21',
    },
    {
      id: 22,
      name: '22',
      value: 22,
      className: 'Zone Zone22',
    },
    //Alt
    {
      id: 23,
      name: '23',
      value: 23,
      className: 'Zone Zone23',
    },
    {
      id: 24,
      name: '24',
      value: 24,
      className: 'Zone Zone24',
    },
    {
      id: 25,
      name: '25',
      value: 25,
      className: 'Zone Zone25',
    },
    {
      id: 26,
      name: '26',
      value: 26,
      className: 'Zone Zone26',
    },
    {
      id: 27,
      name: '27',
      value: 27,
      className: 'Zone Zone27',
    },
  ];

  const buttonListDirection = [
    {
      id: 18,
      name: 'Yukarı',
      value: 1,
      className: 'Direction',
    },
    {
      id: 21,
      name: '<-Sol',
      value: 5,
      className: 'Direction',
    },
    {
      id: 19,
      name: 'Aşağı',
      value: 10,
      className: 'Direction',
    },
    {
      id: 20,
      name: 'Sağ->',
      value: 3,
      className: 'Direction',
    },
  ];

  const handleArraySave = () => {
    // if input is not empty then add to array
    if (routeList.length > 0 || routeList2.length > 0) {
      setAlertError(false);
      setAlertSuccess(true);
      setSuccessAlertMessage('Rota eklendi.');

      setFinalList([...finalList, routeList]);
      setRouteList([]);
      setFinalList2([...finalList2, routeList2]);
      setRouteList2([]);
      setCountList(['0', '0', '0', '0']);
    } else {
      setAlertSuccess(false);
      setAlertError(true);
      setErrorAlertMessage('Lütfen bir değer seçin!');
    }
  };

  const handleDelete = () => setRouteList(routeList.slice(0, -1));
  const handleDelete2 = () => setRouteList2(routeList2.slice(0, -1));
  function handleDeleteAll() {
    setRouteList([]);
    setRouteList2([]);
    setFinalList([]);
    setFinalList2([]);
    setCountList(['0', '0', '0', '0']);
  }
  const handleReset = () => setCountList(['0', '0', '0', '0']);

  const handleDeleteLastArray = () => {
    setFinalList(finalList.slice(0, -1));
    setFinalList2(finalList2.slice(0, -1));
  };

  const handleSend = async () => {
    //TODO: ABCD kaç kere geçildiği arrayinin gönderimi test edilecek...

    let finalListString = '';
    for (let i = 0; i < finalList.length; i++) {
      finalListString += finalList[i].join(',') + ',';
    }
    finalListString = finalListString.slice(0, -1);

    let finalListString2 = '';
    for (let i = 0; i < finalList2.length; i++) {
      finalListString2 += finalList2[i].join(',') + ',';
    }
    finalListString2 = finalListString2.slice(0, -1);

    // Konumların gönderimi:
    const data = {
      topic: 'AGV_ROTA_RX',
      message: finalListString,
    };

    setSpinner(true);

    console.log('FINAL ROUTE: ', data);
    await axios
      .post('http://192.168.1.158:8686/arac/publish', data)
      .then(() => {
        setAlertError(false);
        setSuccessAlertMessage('Rota gönderildi.');
        setAlertSuccess(true);
        console.log('Data: ', data);
      })
      .catch((err) => {
        setAlertSuccess(false);
        setErrorAlertMessage(`Rota Gönderilemedi. Hata: ${err.message}`);
        setAlertError(true);
        console.log('Error Data: ', err.message);
      })
      .finally(() => {
        setFinalList([]);
        setFinalList2([]);
        setRouteList([]);
        setRouteList2([]);
        setSpinner(false);
      });

    // ABCD arrayinin gönderimi:
    const data2 = {
      topic: 'AGV_ROTA_RX',
      message: finalListString2,
    };
    await axios
      .post('http://192.168.1.158:8686/arac/publish', data2)
      .then(() => {
        setAlertError(false);
        setAlertSuccess(true);
        setSuccessAlertMessage('Rota gönderildi.');
        console.log('Data2: ', data2);
      })
      .catch((err) => {
        setAlertSuccess(false);
        setErrorAlertMessage(err.message);
        setAlertError(true);
        console.log('Error Data2: ', err.message);
      })
      .finally(() => {
        setFinalList([]);
        setFinalList2([]);
        setRouteList([]);
        setRouteList2([]);
        setSpinner(false);
      });
  };

  return (
    <div className="CardRoute">
      <h5
        style={{
          marginBottom: '12px',
        }}
      >
        Rota Girişi
      </h5>

      <IconButton
        aria-label="delete"
        color="error"
        size="large"
        style={{
          position: 'absolute',
          top: '24px',
          right: '48px',
        }}
        onClick={handleDeleteAll}
      >
        <DeleteIcon />
      </IconButton>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Route Image */}
        <Grid item>
          <div
            style={{
              position: 'relative',
            }}
          >
            {mapButtonList.map((item) => (
              <button
                key={item.id}
                className={item.className}
                onClick={() => setRouteList([...routeList, item.value])}
              >
                {item.name}
              </button>
            ))}
            {mapButtonListMiddle.map((item) => (
              <button
                key={item.id}
                className={item.className}
                onClick={() => setRouteList2([...routeList2, item.value])}
              >
                {item.name}
              </button>
            ))}
            {mapButtonListOdd.map((item) => (
              <button
                key={item.id}
                className={item.className}
                onClick={() => setRouteList([...routeList, item.value])}
              >
                {item.name}
              </button>
            ))}
            <img src={routeImage} alt="routeImage" />
            {/* End Line Route Image */}
          </div>
        </Grid>

        {/* Middle Side of Card RouteList */}

        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: '0px 14px',
          }}
        >
          <Grid
            container
            direction="row"
            wrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            width="180px"
          >
            <Grid item pb={1}>
              <p>Robotun yönünü seçiniz:</p>
            </Grid>
            {/* Start Direction Buttons */}
            {buttonListDirection.map((button) => (
              <Grid item key={button.name}>
                <button
                  className={button.className}
                  key={button.name}
                  style={{
                    position: 'relative',
                    margin: '0px',
                  }}
                  onClick={() => setRouteList([button.value])}
                >
                  {button.name}({button.value})
                </button>
              </Grid>
            ))}
            {/* End Direction Buttons */}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            wrap="wrap"
            mb={1}
          >
            {/* Start Middle Zones Count Buttons */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mb={1}
            >
              <Grid item>
                <p>Orta noktalardan kaç kere geçeceksiniz?</p>
              </Grid>
            </Grid>
            <Grid item width={'80px'}>
              <TextField
                id="outlined-number"
                label={'A'}
                type="number"
                placeholder="0"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setCountList([
                    e.target.value,
                    countList[1],
                    countList[2],
                    countList[3],
                  ])
                }
              />
            </Grid>
            <Grid item width={'80px'}>
              <TextField
                id="outlined-number"
                label={'B'}
                type="number"
                placeholder="0"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  console.log(countList);
                  setCountList([
                    countList[0],
                    e.target.value,
                    countList[2],
                    countList[3],
                  ]);
                }}
              />
            </Grid>
            <Grid item width={'80px'}>
              <TextField
                id="outlined-number"
                label={'C'}
                type="number"
                placeholder="0"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  console.log(countList);
                  setCountList([
                    countList[0],
                    countList[1],
                    e.target.value,
                    countList[3],
                  ]);
                }}
              />
            </Grid>
            <Grid item width={'80px'}>
              <TextField
                id="outlined-number"
                label={'D'}
                type="number"
                placeholder="0"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  console.log(countList);
                  setCountList([
                    countList[0],
                    countList[1],
                    countList[2],
                    e.target.value,
                  ]);
                }}
              />
            </Grid>
            {/* End Middle Zones Count Buttons */}
          </Grid>
          <Grid container direction="row" justifyContent="space-evenly">
            <Grid
              item
              width={'400px'}
              display={'flex'}
              flexDirection={'row'}
              flexWrap={'wrap'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <TextField
                disabled
                id="filled-disabled"
                label="Rota noktaları..."
                variant="filled"
                color="primary"
                value={routeList}
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: '6px 0px',
                  width: '60%',
                  marginRight: '10px',
                }}
              />

              <AwesomeButton
                type="secondary"
                size="small"
                onPress={handleDelete}
              >
                Sil
              </AwesomeButton>
            </Grid>
            {/* End Line Middle Side of Card */}
            {/* Add Button */}
          </Grid>

          {/* Middle Side of Card RouteList2 */}
          <Grid
            item
            width={'400px'}
            display={'flex'}
            flexDirection={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <TextField
              disabled
              id="filled-disabled"
              label="Yük alma ve bırakma noktaları ..."
              variant="filled"
              color="primary"
              value={routeList2}
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                margin: '6px 0px',
                width: '60%',
                marginRight: '10px',
              }}
            />

            <AwesomeButton
              type="secondary"
              size="small"
              onPress={handleDelete2}
              style={{
                justifySelf: 'End',
              }}
            >
              Sil
            </AwesomeButton>
          </Grid>
          <Grid
            item
            width={'400px'}
            display={'flex'}
            flexDirection={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <TextField
              disabled
              id="filled-disabled"
              label="A - B - C - D Count..."
              variant="filled"
              color="primary"
              value={countList}
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                margin: '6px 0px',
                width: '60%',
                marginRight: '10px',
              }}
            />

            <AwesomeButton
              type="secondary"
              size="small"
              onPress={handleReset}
              style={{
                justifySelf: 'End',
              }}
            >
              Sil
            </AwesomeButton>
          </Grid>
          <Grid item>
            <AwesomeButton
              type="primary"
              size="small"
              onPress={handleArraySave}
            >
              Ekle
            </AwesomeButton>
          </Grid>
        </Grid>

        {/* Alerts */}
        <Grid item position={'relative'}>
          {alertError && (
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              open={alertError}
              autoHideDuration={5000}
              onClose={() => setAlertError(false)}
              TransitionComponent={Grow}
              message={errorAlertMessage}
              key={'error'}
            >
              <Alert
                severity="error"
                variant="filled"
                style={{
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {errorAlertMessage}
              </Alert>
            </Snackbar>
          )}

          {alertSuccess && (
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              open={alertSuccess}
              autoHideDuration={5000}
              onClose={() => setAlertSuccess(false)}
              TransitionComponent={Grow}
              message={successAlertMessage}
              key={'success'}
            >
              <Alert
                severity="success"
                variant="filled"
                style={{
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {successAlertMessage}
              </Alert>
            </Snackbar>
          )}
        </Grid>
        {/* Alerts End */}

        {/* End Line Middle Side of Card */}

        {/* Right Side of Card */}
        <Grid
          item
          minWidth={'260px'}
          minHeight={'240px'}
          alignItems={'center'}
          borderRadius={'8px'}
          backgroundColor={'dimgray'}
        >
          <Grid container direction="column">
            <h5
              style={{
                textAlign: 'center',
                margin: '0px',
                marginTop: '2px',
                marginBottom: '4px',
                color: 'white',
              }}
            >
              Rota Listesi
            </h5>
            <hr
              style={{
                width: '100%',
                border: '2px solid white',
                margin: '0px',
              }}
            />

            <Grid
              item
              style={{
                minHeight: '160px',
              }}
            >
              {finalList.map((route) => (
                <ListItem
                  divider={true}
                  key={route}
                  style={{
                    margin: '0px',
                    padding: '0px',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 0px 8px',
                      color: 'white',
                    }}
                  >
                    #{route}#
                  </p>
                </ListItem>
              ))}
              {finalList2.map((route) => (
                <ListItem
                  divider={true}
                  key={route}
                  style={{
                    margin: '0px',
                    padding: '0px',
                  }}
                >
                  <p
                    style={{
                      margin: '0px 0px 0px 8px',
                      color: 'white',
                    }}
                  >
                    #{route}#
                  </p>
                </ListItem>
              ))}
            </Grid>
            <Grid
              container
              direction="row"
              style={{ justifyContent: 'space-evenly', alignItems: 'center' }}
            >
              <Grid item>
                <AwesomeButton
                  type="primary"
                  size="small"
                  disabled={spinner}
                  onPress={handleSend}
                >
                  {spinner ? 'Bekleyiniz...' : 'Gönder'}
                </AwesomeButton>
              </Grid>
              <Grid item>
                <AwesomeButton
                  type="secondary"
                  size="small"
                  disabled={spinner}
                  onPress={handleDeleteLastArray}
                >
                  Sil
                </AwesomeButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End Line Right Side of Card */}
      </Grid>
    </div>
  );
}

export default CardRouteThird;
