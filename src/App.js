import { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import './App.css';

function App() {

  const [trimmedURL, setTrimmedURL] = useState([]);
  const signatureRef = useRef({});

  function trim() {
    setTrimmedURL([...trimmedURL, signatureRef.current.toDataURL("image/png")]);
    signatureRef.current.clear();
  }

  function clear() {
    signatureRef.current.clear();
  }

  return (
    <div className="App">
      <h1>Signature Pad</h1>
      <div className='signaturePad'>
        <SignaturePad ref={signatureRef} height={150} width={300} penColor={'#0dd2ff'} />
        <button className='save_button' onClick={trim} >Save</button>
        <button className='clear_button' onClick={clear}>Clear</button>
      </div>
      <div className='image-section'>
        {trimmedURL.length ? trimmedURL.map((url, i) => (
            <img key={i} alt={'signature'} src={url} className='signImage' />
        )) : null}
      </div>
    </div>
  );
}

export default App;
