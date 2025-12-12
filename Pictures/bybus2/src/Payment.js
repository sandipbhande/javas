import React from 'react'

import { QrReader } from 'react-qr-reader';
 function Payment() {

  const handleError = () => {
    console.log("dta");
    
  }
  
  return (
    <div>
     <QrReader
        delay={300}
        onError={handleError}
       
        style={{ width: '100%' }}
      />
     
    
    </div>
    
  )
}
export default Payment;