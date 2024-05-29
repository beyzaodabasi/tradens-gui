import React, { useState, useEffect } from 'react';
import API from '../../../api'; //AXIOS BASEURL

//Awesome Button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-red.css';

//icons
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from 'react-icons/bs';
import { HiOutlineLightBulb, HiMusicNote } from 'react-icons/hi';
import { GiStopSign, GiPlayButton } from 'react-icons/gi';

function CardControl() {
  const [isHovering, setIsHovering] = useState(false);

  //TODO: Axios POST ile istek yapılacak.
  //TODO: Basla butonu yerine iki buton gelecek, bunlar yük al ve yük bırak...

  const moveRight = () => {
    // axios POST to Robot
    //   const commandRight = JSON.stringify({
    //     topic: 'ReactJS',
    //     message: 'sag',
    //   });
    //   API.post(`publish`, { data: commandRight }, {})
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error.message));
  };
  const moveLeft = () => {
    // axios POST to Robot
    // const commandLeft = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'sol',
    // });
    // API.post(`publish`, { data: commandLeft }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const moveForward = () => {
    // axios POST to Robot
    // const commandForward = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'ileri',
    // });
    // API.post(`publish`, { data: commandForward }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const moveBackward = () => {
    // axios POST to Robot
    // const commandBackward = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'geri',
    // });
    // API.post(`publish`, { data: commandBackward }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const warnLight = () => {
    // axios POST to Robot
    // const commandLight = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'isik',
    // });
    // API.post(`publish`, { data: commandLight }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const warnSound = () => {
    // axios POST to Robot
    // const commandSound = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'ses',
    // });
    // API.post(`publish`, { data: commandSound }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const robotStop = () => {
    // axios POST to Robot
    // const commandStop = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'dur',
    // });
    // API.post(`publish`, { data: commandStop }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };
  const robotStart = () => {
    // axios POST to Robot
    // const commandStart = JSON.stringify({
    //   topic: 'ReactJS',
    //   message: 'Robot Start',
    // });
    // API.post(`publish`, { data: commandStart }, {})
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error.message));
  };

  return (
    <div className="CardControl">
      <h5>Manuel Kontrol</h5>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Left Side of Card */}
        <div
          style={{
            width: '220px',
          }}
        >
          <div>
            <AwesomeButton
              type="primary"
              ripple
              size="small"
              onPress={moveForward}
            >
              <BsFillCaretUpFill
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </AwesomeButton>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AwesomeButton
              type="primary"
              ripple
              size="small"
              onPress={moveLeft}
            >
              <BsFillCaretLeftFill
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </AwesomeButton>
            <AwesomeButton
              type="primary"
              ripple
              size="small"
              onPress={moveRight}
            >
              <BsFillCaretRightFill
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </AwesomeButton>
          </div>
          <div>
            <AwesomeButton
              type="primary"
              ripple
              size="small"
              onPress={moveBackward}
            >
              <BsFillCaretDownFill
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </AwesomeButton>
          </div>
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
          <AwesomeButton type="primary" ripple size="small" onPress={warnLight}>
            <HiOutlineLightBulb
              style={{
                fontSize: '1.9rem',
                marginTop: '1px',
                marginLeft: '1px',
              }}
            />
          </AwesomeButton>
          <AwesomeButton type="primary" ripple size="small" onPress={warnSound}>
            <HiMusicNote
              style={{
                fontSize: '1.9rem',
                marginTop: '2px',
              }}
            />
          </AwesomeButton>
          <AwesomeButton type="primary" ripple size="small" onPress={robotStop}>
            <GiStopSign
              style={{
                fontSize: '1.9rem',
                marginTop: '2px',
                marginLeft: '1px',
              }}
            />
          </AwesomeButton>
          <AwesomeButton
            type="primary"
            ripple
            size="small"
            onPress={robotStart}
          >
            <GiPlayButton
              style={{
                fontSize: '1.9rem',
                marginLeft: '2px',
                marginTop: '2px',
              }}
            />
          </AwesomeButton>
        </div>
        {/* End Line Right Side of Card */}
      </div>
    </div>
  );
}

export default CardControl;
