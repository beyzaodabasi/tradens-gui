import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TextField from '@mui/material/TextField';
//Alert Package
import Alert from '@mui/material/Alert';

//Awesome Button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-red.css';

function CardRoute() {
  const [isHovering, setIsHovering] = useState(false);
  const [routeList, setRouteList] = useState([]);
  const [formattedRouteList, setFormattedRouteList] = useState([]);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);

  const buttonList = [
    { value: 'S1', label: 'S1' },
    { value: 'S2', label: 'S2' },
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  // This function is used to format the routeList.
  useEffect(() => {
    setFormattedRouteList(routeList.join('-'));
  }, [routeList]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // This is for delete the last element of the array.
  const handleDelete = () => setRouteList(routeList.slice(0, -1));

  const handleSend = () => {
    // axios
    //   .post('http://localhost:8080/api/route', {
    //     route: formattedRouteList,
    //   })
    //   .then(() => setAlertSuccess(true))
    //   .catch(() => setAlertError(true))
    //   .finally(() => setRouteList([]));
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
      <h5>Rota Girişi</h5>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Left Side of Card
            is gonna have a button list.
        */}
        <div
          style={{
            width: '220px',
          }}
        >
          {buttonList.map((button) => (
            <AwesomeButton
              key={button.value}
              type="primary"
              size="small"
              onPress={() => {
                setRouteList([...routeList, button.value]);
              }}
            >
              {button.label}
            </AwesomeButton>
          ))}
        </div>

        {/* End Line Left Side of Card */}
        {/* Right Side of Card */}
        <div
          style={{
            display: 'flex',
            width: '220px',
            marginLeft: '1.5rem',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            disabled
            id="filled-disabled"
            label="Rota listesi..."
            variant="filled"
            color="primary"
            value={formattedRouteList}
          />
          <AwesomeButton type="primary" size="small" onPress={handleSend}>
            Send
          </AwesomeButton>
          <AwesomeButton type="primary" size="small" onPress={handleDelete}>
            Delete
          </AwesomeButton>
          {alertError && (
            <div
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',

                maxWidth: '100%',
                marginTop: '10px',
              }}
            >
              <Alert variant="filled" severity="error">
                Rota bilgileri gönderilemedi.
              </Alert>
            </div>
          )}
          {alertSuccess && (
            <div
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',

                maxWidth: '100%',
                marginTop: '10px',
              }}
            >
              <Alert variant="filled" severity="success">
                Rota bilgileri gönderildi.
              </Alert>
            </div>
          )}
        </div>
        {/* End Line Right Side of Card */}
      </div>
    </div>
  );
}

export default CardRoute;
