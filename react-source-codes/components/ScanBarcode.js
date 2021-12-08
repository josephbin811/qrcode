import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
let html5QrCode;

const ScanBarcode = (props) => {

    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
        html5QrCode.start(
          { facingMode: "environment" },
          qrConfig,
          qrCodeSuccessCallback
        );
      }, []);
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            
          //props.onResult(decodedText);
          handleStop();
          props.setScanResult(decodedText);
    };

    //   const handleClickAdvanced = () => {
    //     const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    //       props.onResult(decodedText);
    //       handleStop();
    //     };

    //     html5QrCode.start(
    //       { facingMode: "environment" },
    //       qrConfig,
    //       qrCodeSuccessCallback
    //     );
    //   };
    
      const handleStop = () => {
        try {
          html5QrCode
            .stop()
            .then((res) => {
              html5QrCode.clear();              
            })
            .catch((err) => {
              console.log(err.message);              
            });
        } catch (err) {
          console.log(err);          
        }
        
      };

      const forceStop = () => {
        try {
          html5QrCode
            .stop()
            .then((res) => {
              html5QrCode.clear();
            })
            .catch((err) => {
              console.log(err.message);
            });
        } catch (err) {
          console.log(err);
        }

        props.stopScan();
      };
    
      return (
        <div style={{ position: "relative" }}>
          <div id="reader" width="100%" />
          {/* <button onClick={() => handleClickAdvanced()}>
            QR code Scan
          </button> */}
          <button onClick={() => forceStop()}>stop Scan</button>
        </div>
      );
}

export default ScanBarcode;



