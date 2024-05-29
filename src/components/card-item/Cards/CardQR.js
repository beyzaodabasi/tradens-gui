import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

function CardQR({ qrInfo }) {
  const [qrData, setQrData] = useState('TRADENS');

  useEffect(() => {
    if (qrInfo) {
      setQrData(qrInfo);
    } else {
      setQrData('TRADENS');
    }
  });

  return (
    <div className="Card">
      <h5>Son Okunan QR Kod</h5>
      <QRCode
        value={qrData}
        size={100}
        style={{
          marginTop: '14px',
        }}
      />
      <p>
        {qrData.qr_isim == null
          ? 'QR Kodu Okunamadı...'
          : `${qrData.qr_isim}, ${qrData.qr_xCoordinate}, ${qrData.qr_yCoordinate}`}
      </p>
    </div>
  );
}

export default CardQR;
