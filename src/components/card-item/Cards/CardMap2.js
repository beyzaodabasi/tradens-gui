import React, { useState, useEffect } from 'react';

import routeImage from '../../../assets/images/Route.svg';

//Mui
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardMap2({ xcoordinate, ycoordinate }) {
  var x = xcoordinate;
  var y = ycoordinate;

  var data = x; //TODO burası hatalı. burada çok büyük değerler geliyor...
  const dataPlus = () => {
    if (data > 13) {
      data = 0;
    } else {
      data++;
    }
  };
  setInterval(dataPlus, 1000);

  if (data == 0) {
    x = 0;
    y = 0;
  }
  if (data == 1) {
    x = 1;
    y = 0;
  }
  if (data == 2) {
    x = 2;
    y = 0;
  }
  if (data == 3) {
    x = 3.5;
    y = 0;
  }
  if (data == 4) {
    x = 4;
    y = 0;
  }
  if (data == 5) {
    x = 5;
    y = 0;
  }

  if (data == 6) {
    x = 6.8;
    y = 0;
  }

  if (data == 7) {
    x = 0;
    y = 1.8;
  }
  if (data == 8) {
    x = 1;
    y = 1.8;
  }
  if (data == 9) {
    x = 2;
    y = 1.8;
  }
  if (data == 10) {
    x = 3.5;
    y = 1.8;
  }
  if (data == 11) {
    x = 4;
    y = 1.8;
  }
  if (data == 12) {
    x = 5;
    y = 1.8;
  }
  if (data == 13) {
    x = 6.8;
    y = 1.8;
  }

  x = Math.round(x * 100);
  y = Math.round(y * 100);
  //draw a dot on the map-container div with the coordinates of the route point (x,y) and the color of the route point (color) and the size of the dot (size)
  useEffect(() => {
    const dot = document.getElementById('dot');

    dot.style.position = 'relative';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.backgroundColor = '#2ecc71';
    dot.style.width = '1rem';
    dot.style.height = '1rem';
    dot.style.borderRadius = '50%';
    dot.style.border = '1px solid #fff';
  });

  return (
    <div className="CardMap">
      <h5
        style={{
          marginBottom: '12px',
        }}
      >
        Harita 2
      </h5>
      <IconButton
        aria-label="delete"
        color="error"
        size="large"
        style={{
          position: 'absolute',
          top: '12px',
          right: '36px',
        }}
        onClick={{}}
      >
        <DeleteIcon />
      </IconButton>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div
          id="map-container"
          style={{
            backgroundColor: 'salmon',
            width: '700px',
            height: '200px',
          }}
        >
          <div id="dot"></div>
        </div>
      </Grid>
    </div>
  );
}
