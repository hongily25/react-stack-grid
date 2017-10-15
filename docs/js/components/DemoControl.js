/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Slider from 'rc-slider';
import { easings, transitions } from '../../../src/';

const selectEasingOptions = Object.keys(easings).map(k => ({
  label: k,
  value: easings[k],
}));

const selectTransitionOptions = Object.keys(transitions).map(k => ({
  label: k,
  value: k,
}));


export default class DemoControl extends Component {
  handleShuffle = () => {
    this.props.onShuffle();
  }

  handlePrepend = () => {
    this.props.onPrepend();
  }

  handleAppend = () => {
    this.props.onAppend();
  }

  handleMultipleAppend = () => {
    this.props.onMultipleAppend();
  }

  handleDurationChange = (value) => {
    this.props.onDurationChange(value);
  }

  handleColumnWidthChange = (value) => {
    this.props.onColumnWidthChange(value);
  }

  handleGutterChange = (value) => {
    this.props.onGutterChange(value);
  }

  handleEasingChange = (e) => {
    this.props.onEasingChange(e.target.value);
  }

  handleTransitionChange = (e) => {
    this.props.onTransitionChange(e.target.value);
  }

  render() {
    const {
      duration,
      columnWidth,
      gutter,
      easing,
      transition,
    } = this.props;

    return (
      <div className="demo-control">
        <div>
          <button className="btn" onClick={this.handleShuffle}>Shuffle</button>
        </div>
        <div>
          <button className="btn" onClick={this.handleAppend}>Append</button>
        </div>
        <div>
          <button className="btn" onClick={this.handleMultipleAppend}>Multiple Append</button>
        </div>
      </div>
    );
  }
}
