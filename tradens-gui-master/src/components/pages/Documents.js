import React, { useState, useEffect } from 'react';

import PDFComponent from '../documentsPage/PDFComponent';
import { Grid } from '@mui/material';

import '../../App.css';

export default function Documents() {
  //UseState
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <Grid
      container
      direction={'column'}
      justify={'center'}
      alignItems={'center'}
    >
      <Grid
        item
        width={`${screenWidth - 80}px`}
        height={`${screenHeight - 80}px`}
      >
        <PDFComponent />
      </Grid>
    </Grid>
  );
}
