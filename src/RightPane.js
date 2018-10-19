import React from 'react';

import Artboard from './assets/ArtboardCropped.png';
import './RightPane.css';

export default props =>
  <div className="right-pane">
    <div className="backdrop">
      <div className="translucent" />
      <img
        className="placeholder"
        src={ Artboard }
      />
    </div>
  </div>
