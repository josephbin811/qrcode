import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import './components/ScanBarcode';
import ScanBarcode from './components/ScanBarcode';

function App() {

  const[scanObj, setScanObj] = useState({
    barcodeValue: '',
    isScanning: false
  })

  // const[bacodeValue,setBarcodeValue] = useState('aaa');
  // const[isScanning, setIsScanning] = useState(false);

  const stopScanQRCode = () => {
    //setIsScanning(false);
    setScanObj({
      barcodeValue: '',
      isScanning:false
    })
  }

  const setQRCodeScanResult = (value) => {
    //setBarcodeValue(value);
    setScanObj({
      barcodeValue: value,
      isScanning:false
    })
  }



  return (
    scanObj.isScanning ? <ScanBarcode setScanResult={setQRCodeScanResult} stopScan = {stopScanQRCode} />
    :
    <div className="App">
      <header className="App-header">

        <button type="button" onClick={ () => { 
          setScanObj({
            barcodeValue: '',
            isScanning:true
          }) }}>Scan</button>
        <input type="text" value={scanObj.barcodeValue}></input>


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
