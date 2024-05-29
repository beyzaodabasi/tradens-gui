import React, { useEffect, useState } from 'react';

import '../../App.css';

export default function PDFComponent() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'salmon',
      }}
    >
      <iframe
        title="Tradens Detay Raporu"
        src="/TradensDetayRaporu.pdf"
        loading="lazy"
        style={{
          position: 'fixed',
          top: '80px',
          height: `${screenHeight - 80}px`,
          width: `${screenWidth - 40}px`,
          border: 'none',
        }}
      />
    </div>
  );
}
