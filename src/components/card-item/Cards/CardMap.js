import React, { useState, useEffect } from 'react';

import routeImage from '../../../assets/images/Route.svg';

//Mui
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardMap({ _qrInfo }) {
  const [qrData, setQrData] = useState('');
  const [qrArrayRaw, setQrArrayRaw] = useState([]);
  const [qrArrayCooked, setQrArrayCooked] = useState([]);

  useEffect(() => {
    setQrData(_qrInfo?.qr_isim);
  }, [_qrInfo]);

  useEffect(() => {
    setQrArrayRaw([...qrArrayRaw, qrData]);

    setQrArrayCooked([...new Set(qrArrayRaw)]);
  }, [qrData, qrArrayRaw]);
  function handleDeleteAll() {
    setQrArrayRaw([]);
    setQrArrayCooked([]);
  }

  //mapData has 52 qr data and one qr data has id, qrName, className
  // (1...14) and (30, 31, 40, 44, 47, 48)
  const [dataMapDown] = useState([
    {
      id: 1,
      qrName: 'Q1',
      className: 'Qr Qr1',
    },
    {
      id: 2,
      qrName: 'Q2',
      className: 'Qr Qr2',
    },
    {
      id: 3,
      qrName: 'Q3',
      className: 'Qr Qr3',
    },
    {
      id: 4,
      qrName: 'Q4',
      className: 'Qr Qr4',
    },
    {
      id: 5,
      qrName: 'Q5',
      className: 'Qr Qr5',
    },
    {
      id: 6,
      qrName: 'Q6',
      className: 'Qr Qr6',
    },
    {
      id: 7,
      qrName: 'Q7',
      className: 'Qr Qr7',
    },
    {
      id: 8,
      qrName: 'Q8',
      className: 'Qr Qr8',
    },
    {
      id: 9,
      qrName: 'Q9',
      className: 'Qr Qr9',
    },
    {
      id: 10,
      qrName: 'Q10',
      className: 'Qr Qr10',
    },
    {
      id: 11,
      qrName: 'Q11',
      className: 'Qr Qr11',
    },
    {
      id: 12,
      qrName: 'Q12',
      className: 'Qr Qr12',
    },
    {
      id: 13,
      qrName: 'Q13',
      className: 'Qr Qr13',
    },
    {
      id: 14,
      qrName: 'Q14',
      className: 'Qr Qr14',
    },
    {
      id: 30,
      qrName: 'Q30',
      className: 'Qr Qr30',
    },
    {
      id: 31,
      qrName: 'Q31',
      className: 'Qr Qr31',
    },
    {
      id: 40,
      qrName: 'Q40',
      className: 'Qr Qr40',
    },
    {
      id: 41,
      qrName: 'Q41',
      className: 'Qr Qr41',
    },
    {
      id: 47,
      qrName: 'Q47',
      className: 'Qr Qr47',
    },
    {
      id: 48,
      qrName: 'Q48',
      className: 'Qr Qr48',
    },
  ]);

  // (15...29) and (35, 36, 42, 43, 52)
  const [dataMapUp] = useState([
    {
      id: 15,
      qrName: 'Q15',
      className: 'Qr Qr15',
    },
    {
      id: 16,
      qrName: 'Q16',
      className: 'Qr Qr16',
    },
    {
      id: 17,
      qrName: 'Q17',
      className: 'Qr Qr17',
    },
    {
      id: 18,
      qrName: 'Q18',
      className: 'Qr Qr18',
    },
    {
      id: 19,
      qrName: 'Q19',
      className: 'Qr Qr19',
    },
    {
      id: 20,
      qrName: 'Q20',
      className: 'Qr Qr20',
    },
    {
      id: 21,
      qrName: 'Q21',
      className: 'Qr Qr21',
    },
    {
      id: 22,
      qrName: 'Q22',
      className: 'Qr Qr22',
    },
    {
      id: 23,
      qrName: 'Q23',
      className: 'Qr Qr23',
    },
    {
      id: 24,
      qrName: 'Q24',
      className: 'Qr Qr24',
    },
    {
      id: 25,
      qrName: 'Q25',
      className: 'Qr Qr25',
    },
    {
      id: 26,
      qrName: 'Q26',
      className: 'Qr Qr26',
    },
    {
      id: 27,
      qrName: 'Q27',
      className: 'Qr Qr27',
    },
    {
      id: 28,
      qrName: 'Q28',
      className: 'Qr Qr28',
    },
    {
      id: 29,
      qrName: 'Q29',
      className: 'Qr Qr29',
    },
    {
      id: 35,
      qrName: 'Q35',
      className: 'Qr Qr35',
    },
    {
      id: 36,
      qrName: 'Q36',
      className: 'Qr Qr36',
    },
    {
      id: 42,
      qrName: 'Q42',
      className: 'Qr Qr42',
    },
    {
      id: 43,
      qrName: 'Q43',
      className: 'Qr Qr43',
    },
    {
      id: 52,
      qrName: 'Q52',
      className: 'Qr Qr52',
    },
  ]);

  // 32, 33, 34, 37, 38, 39, 44, 45, 46, 49, 50, 51
  const [dataMapMiddle] = useState([
    {
      id: 32,
      qrName: 'Q32',
      className: 'Qr Qr32',
    },
    {
      id: 33,
      qrName: 'Q33',
      className: 'Qr Qr33',
    },
    {
      id: 34,
      qrName: 'Q34',
      className: 'Qr Qr34',
    },
    {
      id: 37,
      qrName: 'Q37',
      className: 'Qr Qr37',
    },
    {
      id: 38,
      qrName: 'Q38',
      className: 'Qr Qr38',
    },
    {
      id: 39,
      qrName: 'Q39',
      className: 'Qr Qr39',
    },
    {
      id: 44,
      qrName: 'Q44',
      className: 'Qr Qr44',
    },
    {
      id: 45,
      qrName: 'Q45',
      className: 'Qr Qr45',
    },
    {
      id: 46,
      qrName: 'Q46',
      className: 'Qr Qr46',
    },
    {
      id: 49,
      qrName: 'Q49',
      className: 'Qr Qr49',
    },
    {
      id: 50,
      qrName: 'Q50',
      className: 'Qr Qr50',
    },
    {
      id: 51,
      qrName: 'Q51',
      className: 'Qr Qr51',
    },
  ]);

  return (
    <div className="CardMap">
      <h5
        style={{
          marginBottom: '12px',
        }}
      >
        Harita
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
        <Grid item>
          <div
            style={{
              position: 'relative',
            }}
          >
            {dataMapDown.map((item) => (
              <div
                key={item.id}
                className={item.className}
                style={{
                  
                  backgroundColor:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? '#2ECC71'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? '#3AD06E'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? '#46D46B'
                      : qrArrayCooked[qrArrayCooked.length - 4] === item.qrName
                      ? '#52D868'
                      : qrArrayCooked[qrArrayCooked.length - 5] === item.qrName
                      ? '#5EDC65'
                      : qrArrayCooked[qrArrayCooked.length - 6] === item.qrName
                      ? '#6AE062'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#76E45F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#83E75B'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#8FEB58'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#9BEF55'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#A7F352'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#B3F74F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#BFFB4C'
                      : qrArrayCooked.includes(item.qrName)
                      ? '#CBFF49'
                      : 'white',
                  transform:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? 'scale(1.5)'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? 'scale(1.4)'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? 'scale(1.3)'
                      : qrArrayCooked.includes(item.qrName)
                      ? 'scale(1.3)'
                      : '',
                  paddingRight: qrArrayCooked.includes(item.qrName)
                    ? '5px'
                    : '',
                  paddingBottom: qrArrayCooked.includes(item.qrName)
                    ? '4px'
                    : '',
                  paddingLeft: qrArrayCooked.includes(item.qrName) ? '5px' : '',
                }}
              >
                <p
                  style={{
                    margin: '0px',
                    padding: '0px',
                    color: qrArrayCooked.includes(item.qrName)
                      ? 'darkslateblue'
                      : 'dimgray',
                    fontWeight: qrArrayCooked.includes(item.qrName)
                      ? 'bold'
                      : 'normal',
                  }}
                >
                  {item.qrName}
                </p>
              </div>
            ))}
            {dataMapMiddle.map((item) => (
              <div
                key={item.id}
                className={item.className}
                style={{
                  
                  backgroundColor:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? '#2ECC71'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? '#3AD06E'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? '#46D46B'
                      : qrArrayCooked[qrArrayCooked.length - 4] === item.qrName
                      ? '#52D868'
                      : qrArrayCooked[qrArrayCooked.length - 5] === item.qrName
                      ? '#5EDC65'
                      : qrArrayCooked[qrArrayCooked.length - 6] === item.qrName
                      ? '#6AE062'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#76E45F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#83E75B'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#8FEB58'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#9BEF55'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#A7F352'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#B3F74F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#BFFB4C'
                      : qrArrayCooked.includes(item.qrName)
                      ? '#CBFF49'
                      : 'white',
                  transform:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? 'scale(1.5)'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? 'scale(1.4)'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? 'scale(1.3)'
                      : qrArrayCooked.includes(item.qrName)
                      ? 'scale(1.3)'
                      : '',
                  paddingRight: qrArrayCooked.includes(item.qrName)
                    ? '5px'
                    : '',
                  paddingBottom: qrArrayCooked.includes(item.qrName)
                    ? '4px'
                    : '',
                  paddingLeft: qrArrayCooked.includes(item.qrName) ? '5px' : '',
                }}
              >
                <p
                  style={{
                    margin: '0px',
                    padding: '0px',
                    color: qrArrayCooked.includes(item.qrName)
                      ? 'darkslateblue'
                      : 'dimgray',
                    fontWeight: qrArrayCooked.includes(item.qrName)
                      ? 'bold'
                      : 'normal',
                  }}
                >
                  {item.qrName}
                </p>
              </div>
            ))}
            {dataMapUp.map((item) => (
              <div
                key={item.id}
                className={item.className}
                style={{
                  
                  backgroundColor:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? '#2ECC71'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? '#3AD06E'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? '#46D46B'
                      : qrArrayCooked[qrArrayCooked.length - 4] === item.qrName
                      ? '#52D868'
                      : qrArrayCooked[qrArrayCooked.length - 5] === item.qrName
                      ? '#5EDC65'
                      : qrArrayCooked[qrArrayCooked.length - 6] === item.qrName
                      ? '#6AE062'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#76E45F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#83E75B'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#8FEB58'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#9BEF55'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#A7F352'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#B3F74F'
                      : qrArrayCooked[qrArrayCooked.length - 7] === item.qrName
                      ? '#BFFB4C'
                      : qrArrayCooked.includes(item.qrName)
                      ? '#CBFF49'
                      : 'white',
                  transform:
                    qrArrayCooked[qrArrayCooked.length - 1] === item.qrName
                      ? 'scale(1.5)'
                      : qrArrayCooked[qrArrayCooked.length - 2] === item.qrName
                      ? 'scale(1.4)'
                      : qrArrayCooked[qrArrayCooked.length - 3] === item.qrName
                      ? 'scale(1.3)'
                      : qrArrayCooked.includes(item.qrName)
                      ? 'scale(1.3)'
                      : '',
                  paddingRight: qrArrayCooked.includes(item.qrName)
                    ? '5px'
                    : '',
                  paddingBottom: qrArrayCooked.includes(item.qrName)
                    ? '4px'
                    : '',
                  paddingLeft: qrArrayCooked.includes(item.qrName) ? '5px' : '',
                }}
              >
                <p
                  style={{
                    margin: '0px',
                    padding: '0px',
                    color: qrArrayCooked.includes(item.qrName)
                      ? 'darkslateblue'
                      : 'dimgray',
                    fontWeight: qrArrayCooked.includes(item.qrName)
                      ? 'bold'
                      : 'normal',
                  }}
                >
                  {item.qrName}
                </p>
              </div>
            ))}
            <img
              src={routeImage}
              alt="routeImage"
              style={{
                width: '800px',
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
