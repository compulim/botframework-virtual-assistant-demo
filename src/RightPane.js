import { connect } from 'react-redux';
import React from 'react';

import Artboard from './assets/ArtboardElaineCroppedEmptied.png';
import './RightPane.css';

function formatTime(date) {
  date = new Date(date);

  const hours = date.getHours() % 12;

  return `${ hours || '12' }:${ pad(date.getMinutes()) } ${ date.getHours() < 12 ? 'AM' : 'PM' }`;
}

function pad(value, count = 2, padding = '0') {
  value += '';
  count -= value.length;

  while (count--) {
    value = padding + value;
  }

  return value;
}

export default connect(({ climateControl, navigation, audioControl }) => ({
  driverSideTemperature: climateControl.driverSideTemperature,
  outsideTemperature: climateControl.outsideTemperature,
  nowPlaying: audioControl.nowPlaying,
  radioStation: audioControl.radioStation,
  navigationEstimatedTimeOfArrival: navigation.estimatedTimeOfArrival,
  navigationFullAddress: navigation.fullAddress
}))(({
  driverSideTemperature,
  outsideTemperature,
  nowPlaying,
  radioStation,
  navigationEstimatedTimeOfArrival,
  navigationFullAddress
}) => {
  return (
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
        <div className="real-time-clock">{ formatTime(new Date()) }</div>
        {
          !!navigationEstimatedTimeOfArrival &&
            <div className="destination-eta">
              <span>DESTINATION</span><br />
              <span>
                { `ARRIVE AT ${ formatTime(navigationEstimatedTimeOfArrival) }` }
              </span>
            </div>
        }
        {
          !!navigationFullAddress &&
            <div className="destination-full-address">
              { navigationFullAddress }
            </div>
        }
      </div>
      <div className="now-playing">{ nowPlaying }</div>
      <div className="radio-station">{ radioStation }</div>
    </div>
  );
})
