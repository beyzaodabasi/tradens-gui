import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AliceCarousel from 'react-alice-carousel';

// import 'react-alice-carousel/lib/alice-carousel.css';

import '../../App.css';

export default function SignUp() {
  const handleDragStart = (e) => e.preventDefault();

  const itemData = [
    {
      img: 'https://drive.google.com/uc?export=view&id=12s1jzuo2VaPpMz1_2UgfvFoQevJKNrVO',
      title: '1',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=12xMt7o0-hwWXLN93UITTRTfelaDvKyep',
      title: '2',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=12ksknxrHgmduQNqasHOvL3KVFJypKIFP',
      title: '3',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=12fpdPZtbOU0WGbCoS8-MT81slbGdsujx',
      title: '4',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=12wbFcdB7oJ03iTWapavLwK-0KSqp6-wt',
      title: '5',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1Bo8D9wImTxW_m0CAkDufCziUpyR4BsxA',
      title: '6',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1xKW-OZ0WRJA4y68-oint_DxLfQSEA1ZN',
      title: '7',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1bgnT-lyfkpwKRuN4mVNLhV3S6_tPqvF2',
      title: '8',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1RSK26yoFAjjTItULlfvgYurlKMuO-n4I',
      title: '9',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=12wbFcdB7oJ03iTWapavLwK-0KSqp6-wt',
      title: '10',
    },
    {
      img: 'https://drive.google.com/uc?export=view&id=1U-20blNA2nAklqnt8z75XEWxr2MJj6wZ',
      title: '11',
    },
  ];

  //UseState
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <h1
          style={{
            fontSize: '50px',
            fontWeight: 'bold',
            color: 'black',
            textShadow: '0px 0px 3px black',
            marginTop: '36px',
            marginBottom: '12px',
          }}
        >
          YİĞİDO TEAM
        </h1>
      </Grid>
      <Box
        style={{
          width: '95%',
        }}
      >
        <ImageList
          variant="masonry"
          gap={24}
          style={{
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '36px',
            marginBottom: '24px',
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: '12px',
                  border: '2px solid white',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
}
