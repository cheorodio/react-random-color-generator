import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState('');

  return (
    <div className="container">
      <h1>Random Color Generator</h1>
      <button
        onClick={() =>
          setRandomColor(color({ hue: hue, lightness: lightness }))
        }
        className="btn"
      >
        Generate
      </button>

      <div className="color-container">
        <div style={{ backgroundColor: randomColor }} className="color" />
        <p className="color-hex">Generated Color: {randomColor}</p>
      </div>

      <p className="optional-title">
        Optional <br />
        Please enter hue and lightness to get your own random color
      </p>
      <form className="generate-color">
        <div>
          <input
            placeholder="Type a color name"
            onChange={(e) => {
              setHue(e.currentTarget.value.toLowerCase());
            }}
          />
        </div>
        <div>
          <input
            placeholder="Type either light or dark"
            onChange={(e) => {
              setLightness(e.currentTarget.value.toLowerCase());
            }}
          />
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            setHue('');
            setLightness('');
            setRandomColor('');
          }}
        >
          reset
        </button>
      </form>
    </div>
  );
}
