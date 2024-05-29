import React, { useState, useEffect } from 'react';
//CSS
import './Footer.styles.css';
import Grid from '@mui/material/Grid';

import AETimg from '../../assets/images/AET.png';
import CUYAVimg from '../../assets/images/CUYAV.png';
import DIZAYNimg from '../../assets/images/DIZAYN.png';

export default function Footer() {
  const [sponsors] = useState([
    {
      name: 'AET Electronics',
      url: 'https://aetelectronics.com.tr/',
      imagePath: AETimg,
      imageSize: '4rem',
      aTagSize: '1rem',
    },
    {
      name: 'Cumhuriyet Üniversitesi/Yapay Zeka ve Veri Bilimi Merkezi',
      url: 'https://cuyav.cumhuriyet.edu.tr/',
      imagePath: CUYAVimg,
      imageSize: '4rem',
      aTagSize: '1rem',
    },
    {
      name: 'Dizayn Bilgisayar',
      url: 'http://www.dizayn.net.tr/',
      imagePath: DIZAYNimg,
      imageSize: '4rem',
      aTagSize: '1rem',
    },
  ]);

  return (
    <div>
      <Grid
        container
        direction="row"
        display="flex"
        flex="wrap"
        justifyContent="space-around"
        alignItems="center"
        padding="2rem"
      >
        <Grid item>
          <div className="CardCamLid">
            <iframe
              alt="camlid"
              title="Kamera"
              src="http://192.168.1.150:8050"
              width={'640px'}
              height={'480px'}
              scrolling="no"
              border="1px"
              style={{
                borderRadius: '12px',
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className="CardCamLid">
            <iframe
              alt="live"
              title="Lidar"
              src="http://192.168.1.151:8050"
              width={'640px'}
              height={'480px'}
              scrolling="no"
              style={{
                borderRadius: '12px',
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={'1rem'}
        backgroundColor={'white'}
        borderRadius={'24px 24px 0px 0px'}
      >
        {sponsors.map((sponsor) => (
          <Grid
            container
            key={sponsor.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{
              marginTop: '1rem',
              marginBottom: '1rem',
              width: `${100 / sponsors.length}%`,
            }}
          >
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                key={sponsor.name}
                src={sponsor.imagePath}
                alt={sponsor.name}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
