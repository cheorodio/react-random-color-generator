import './App.css';
import color from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [randomColor, setRandomColor] = useState('');
  const [hue, setHue] = useState('');
  const [lightness, setLightness] = useState('');

  return (
    <div className="container">
      <div className="title">Random Color Generator</div>
      <button
        onClick={() =>
          setRandomColor(color({ hue: hue, luminosity: lightness }))
        }
        className="btn"
      >
        Generate
      </button>
      <div className="color-container">
        <div style={{ backgroundColor: randomColor }} className="color">
          Generated Color: {randomColor}
        </div>
      </div>
      <p className="optional-title">
        Optional <br />
        Please enter hue and/or lightness to get your own random color
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

        {hue === '' && lightness === '' ? (
          ''
        ) : (
          <button
            className="reset-btn"
            onClick={() => {
              setHue('Type a color name');
              setLightness('Type either light or dark');
              setRandomColor('');
            }}
          >
            reset
          </button>
        )}
      </form>
    </div>
  );
}
