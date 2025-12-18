import React from 'react'

import { QrScanner } from '@yudiel/react-qr-scanner';
 function Payment() {

  const handleScan = (detectedCodes) => {
    // The result is an array, we'll take the first one.
    if (detectedCodes && detectedCodes.length > 0) {
      console.log(detectedCodes[0].rawValue);
    }
  }

  const handleError = () => {
    console.error("QR Scanner Error");
  }
  
  return (
    <div>
     <QrScanner
        onScan={handleScan}
        onError={handleError}
      />
    </div>
    
  )
}
export default Payment;