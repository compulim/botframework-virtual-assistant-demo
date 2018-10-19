import { connect } from 'react-redux';
import React from 'react';

import Artboard from './assets/ArtboardCropped.png';
import './RightPane.css';

export default connect(({ climateControl }) => ({
  driverSideTemperature: climateControl.driverSideTemperature,
  outsideTemperature: climateControl.outsideTemperature
}))(({
  driverSideTemperature,
  outsideTemperature
}) =>
  <div className="right-pane">
    <div className="box">
      <div className="translucent" />
      <img
        alt=""
        className="placeholder"
        src={ Artboard }
      />
      <div className="driver-side-temperature">{ driverSideTemperature }&deg;</div>
      <div className="outside-temperature">{ outsideTemperature }&deg;</div>
    </div>
  </div>
)
