import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Alert from '@mui/material/Alert';
import ToggleButton from 'react-toggle-button';
import { Grid } from '@mui/material';

function CardPermission({ permissionInfo }) {
  const [isHovering, setIsHovering] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (!permissionInfo) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  });

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'Web',
      status: permissionInfo.web || false,
    },
    {
      id: 2,
      name: 'Mobile',
      status: permissionInfo.mobile || false,
    },
    {
      id: 3,
      name: 'Joystick',
      status: permissionInfo.controller || false,
    },
  ]);

  return (
    <div
      className="Card"
      style={{
        transform: isHovering ? 'scale(1.1)' : '',
        transition: 'transform 0.1s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h5>Kontrol İzinleri</h5>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt={3}
      >
        {modules.map((sensor) => (
          <Grid item m={1} mb={0} mt={0}>
            <p>{sensor.name}:</p>
            <Grid item>
              <ToggleButton
                value={sensor.status}
                thumbStyle={{ borderRadius: 2 }}
                trackStyle={{ borderRadius: 2 }}
                activeLabel="ON"
                inactiveLabel="OFF"
                inactiveLabelStyle={{ color: '#ff0000' }}
                onToggle={(value) =>
                  setModules(
                    modules.map((module) =>
                      module.id === sensor.id
                        ? { ...module, status: value }
                        : module
                    )
                  )
                }
              />
            </Grid>
          </Grid>
        ))}
        {alert && (
          <Grid item>
            <Alert variant="filled" severity="warning">
              İzinleri güncellemelisiniz.
            </Alert>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default CardPermission;
