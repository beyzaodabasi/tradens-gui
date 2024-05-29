import React, { useState, useEffect } from 'react';
import axios from 'axios';

import routeImage from '../../../assets/images/Route.svg';

import TextField from '@mui/material/TextField';
//Alert Package
import Alert from '@mui/material/Alert';

//Mui List
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';

//Awesome Button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-red.css';

function CardRouteSecond() {
  const [isHovering, setIsHovering] = useState(false);
  const [routeList, setRouteList] = useState([]);
  const [routeList2, setRouteList2] = useState([]);
  const [formattedRouteList, setFormattedRouteList] = useState([]);
  const [formattedRouteList2, setFormattedRouteList2] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [finalList2, setFinalList2] = useState([]);
  const [mergedArray, setMergedArray] = useState([]);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [successAlertMessage, setSuccessAlertMessage] = useState('');
  const [errorAlertMessage, setErrorAlertMessage] = useState('');

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
      name: 'Start1',
      value: 3,
      className: 'Zone Start1',
    },
    {
      id: 4,
      name: '4',
      value: 4,
      className: 'Zone Zone4',
    },
    {
      id: 5,
      name: '5',
      value: 5,
      className: 'Zone Zone5',
    },
    {
      id: 6,
      name: '6',
      value: 6,
      className: 'Zone Zone6',
    },
    //Alt kenar
    {
      id: 7,
      name: '7',
      value: 7,
      className: 'Zone Zone7',
    },
    {
      id: 8,
      name: '8',
      value: 8,
      className: 'Zone Zone8',
    },
    {
      id: 9,
      name: '9',
      value: 9,
      className: 'Zone Zone9',
    },
    {
      id: 10,
      name: 'Start2',
      value: 10,
      className: 'Zone Start2',
    },
    {
      id: 11,
      name: '11',
      value: 11,
      className: 'Zone Zone11',
    },
    {
      id: 12,
      name: '12',
      value: 12,
      className: 'Zone Zone12',
    },
    {
      id: 13,
      name: '13',
      value: 13,
      className: 'Zone Zone13',
    },
  ];

  const mapButtonListMiddle = [
    //Orta Alan
    {
      id: 14,
      name: 'A',
      value: 'A',
      className: 'Zone ZoneA',
    },
    {
      id: 15,
      name: 'B',
      value: 'B',
      className: 'Zone ZoneB',
    },
    {
      id: 16,
      name: 'C',
      value: 'C',
      className: 'Zone ZoneC',
    },
    {
      id: 17,
      name: 'D',
      value: 'D',
      className: 'Zone ZoneD',
    },
  ];

  const buttonListDirection = [
    {
      id: 18,
      name: 'Yukarı',
      value: 1,
      className: 'Zone Direction',
    },
    {
      id: 21,
      name: 'Sol',
      value: 5,
      className: 'Zone Direction',
    },
    {
      id: 20,
      name: 'Sağ',
      value: 3,
      className: 'Zone Direction',
    },
    {
      id: 19,
      name: 'Aşağı',
      value: 10,
      className: 'Zone Direction',
    },
  ];

  // This function is used to format the routeList.
  useEffect(() => {
    setFormattedRouteList(routeList.join(','));
    setFormattedRouteList2(routeList2.join(','));
  }, [routeList, routeList2]);

  useEffect(() => {
    setMergedArray([...finalList, ...finalList2]);
  }, [finalList, finalList2]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleArraySave = () => {
    // if input is not empty then add to array
    if (formattedRouteList !== '') {
      setAlertError(false);
      setAlertSuccess(true);
      setSuccessAlertMessage('Rota eklendi.');
      setFinalList([...finalList, formattedRouteList]);
      setRouteList([]);
      setFinalList2([...finalList2, formattedRouteList2]);
      setRouteList2([]);
    } else {
      setAlertSuccess(false);
      setAlertError(true);
      setErrorAlertMessage('Lütfen bir değer seçin!');
    }
  };

  const handleDelete = () => setRouteList(routeList.slice(0, -1));
  const handleDelete2 = () => setRouteList2(routeList2.slice(0, -1));

  const handleDeleteLastArray = () => {
    setFinalList(finalList.slice(0, -1));
    setFinalList2(finalList2.slice(0, -1));
  };
  const handleSend = async () => {
    let lastFinalList = finalList.join(',');
    let lastFinalList2 = finalList2.join(',');

    // Konumların gönderimi:
    const data = {
      topic: 'AGV_ROTA_RX',
      message: lastFinalList,
    };

    console.log('FINAL ROUTE: ', data);
    await axios
      .post('http://192.168.1.118:8686/arac/publish', data)
      .then(() => setAlertSuccess(true))
      .catch((err) => {
        setErrorAlertMessage(err.message);
        setAlertError(true);
      })
      .finally(() => {
        setFinalList([]);
        setRouteList([]);
      });

    // ABCD arrayinin gönderimi:
    const data2 = {
      topic: 'AGV_ROTA_RX',
      message: lastFinalList2,
    };
    await axios
      .post('http://192.168.1.118:8686/arac/publish', data2)
      .then(() => setAlertSuccess(true))
      .catch((err) => {
        setErrorAlertMessage(err.message);
        setAlertError(true);
      })
      .finally(() => {
        setFinalList2([]);
        setRouteList2([]);
      });
  };

  return (
    <div
      className="CardRoute"
      style={{
        backgroundColor: isHovering ? 'rgba(238, 236, 245, 1)' : '',
        bottom: isHovering ? 3 : 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h5
        style={{
          marginBottom: '12px',
        }}
      >
        Rota Girişi
      </h5>
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
          <Grid container direction="row" justifyContent="space-evenly">
            {/* Start Direction Buttons */}
            {buttonListDirection.map((button) => (
              <Grid item key={button.name}>
                <button
                  className="Zone"
                  style={{
                    position: 'relative',
                    margin: '1px',
                    marginBottom: '10px',
                  }}
                  key={button.name}
                  onClick={() => setRouteList([button.value])}
                >
                  {button.name}
                </button>
              </Grid>
            ))}
            {/* End Direction Buttons */}
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
                value={formattedRouteList}
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
              value={formattedRouteList2}
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

        <Grid item position={'relative'}>
          {alertError && (
            <Grid
              item
              width={'220px'}
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: '5px',
              }}
            >
              <Alert variant="filled" severity="error">
                {errorAlertMessage}
              </Alert>
            </Grid>
          )}
          {alertSuccess && (
            <Grid
              item
              width={'220px'}
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: '5px',
              }}
            >
              <Alert variant="filled" severity="success">
                {successAlertMessage}
              </Alert>
            </Grid>
          )}
        </Grid>

        {/* End Line Middle Side of Card */}

        {/* Right Side of Card */}
        <Grid
          item
          minWidth={'180px'}
          minHeight={'220px'}
          alignItems={'center'}
          borderRadius={'8px'}
          backgroundColor={'#f44336'}
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

            {/* {mergedArray.map((item) => (
              <ListItem
                key={item}
                style={{
                  margin: '0px',
                  padding: '0px',
                  color: 'white',
                }}
                divider={true}
              >
                <p
                  style={{
                    margin: '0px 0px 0px 8px',
                    color: 'white',
                  }}
                >
                  {item}
                </p>
              </ListItem>
            ))} */}

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
                  {route}
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
                  {route}
                </p>
              </ListItem>
            ))}
            <Grid container direction="row" style={{ position: 'relative' }}>
              <Grid item>
                <AwesomeButton type="primary" size="small" onPress={handleSend}>
                  Gönder
                </AwesomeButton>
              </Grid>
              <Grid item>
                <AwesomeButton
                  type="secondary"
                  size="small"
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

export default CardRouteSecond;
