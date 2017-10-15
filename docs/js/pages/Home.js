/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import StackGrid, { transitions, easings } from '../../../src/';
import DemoControl from '../components/DemoControl';

const itemModifier = [
  'gray'
];

const itemID = [
  '0x05d1de68f3064c0150300fdaba3c24681b30506a88111ac23b500fd49rsdfj26c',
  '0x02d345620150300fdaba3c24681b30506a88111ac23b500fd49f07766cbsdfdf',
  '0x04681b30506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
  '0x0454g150300fdabsadasda3c2468dfgac23b500fd49fdgfg263xvkcxjv23525b',
  '0x01d3456201sdfsdfdaba3c24681b30506a88111ac23b500fd49f07766134f989',
  '0x05v71a0506a88111ac23fdaba3c24681b30506a88111ac23b500fd49f077611',
];

const contractID = [
  '0x353597fd2e965786d84digof8a9c534554dsfv06',
  '0x00fd49f0dsf965786d8d2506a88111asdf00fd24',
  '0x3fdaba3c24681b30506a88111ac23b500fd4sdfv',
  '0xcdc39597fd2e965786d8d2505e5f8a9c514de75e',
  '0xdfsdfdaba3c24681b30506a88111ac23b500fd49',
  '0xcdc39597fd2e9657sdfxv505e5f8a9c514dfe75e',
  '0xdfsdfdaba3c24681b30506a88111ac23b500fd49',
  '0xdfdfxcv7fd2e965786d8dsdf14de75ev234vjd24',
  '0xaf344681b305vxdff06a88111acsdf1ac23b500f',
  '0x681b30506a88111ac23fdasddf6d8d2545de75e3',
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    const items = [];

    for (let i = 0; i < 10; i += 1) {
      items.push(this.createItem());
    }

    this.state = {
      items,
      duration: 480,
      columnWidth: 300,
      gutter: 5,
      easing: easings.quartOut,
      transition: 'fadeDown',
    };
  }

  createItem() {
    const id = Math.random().toString(36).substr(2, 9);
    const height = Math.floor((Math.random() * (300 - 80)) + 80);
    const modifier = itemModifier[Math.floor(Math.random() * itemModifier.length)];
    const transactionHash = itemID[Math.floor(Math.random() * itemModifier.length)];
    const contractAddress = contractID[Math.floor(Math.random() * contractID.length)];

    return { id, height, modifier, transactionHash, contractAddress };
  }

  shuffleItems = () => {
    const newItems = [...this.state.items];
    let i = newItems.length;

    while (i) {
      const j = Math.floor(Math.random() * i);
      const t = newItems[--i]; // eslint-disable-line no-plusplus
      newItems[i] = newItems[j];
      newItems[j] = t;
    }

    this.setState({ items: newItems });
  }

  prependItem = () => {
    this.setState({
      items: [this.createItem(), ...this.state.items],
    });
  }

  appendItem = () => {
    this.setState({
      items: [...this.state.items, this.createItem()],
    });
  }

  multipleAppendItem = () => {
    const newItems = [];

    for (let i = 0; i < 5; i += 1) {
      newItems.push(this.createItem());
    }

    this.setState({
      items: [...this.state.items, ...newItems],
    });
  }

  removeItem = (id) => {
    this.setState({
      items: this.state.items.filter(o => o.id !== id),
    });
  }

  handleDurationChange = (duration) => {
    this.setState({ duration });
  }

  handleColumnWidthChange = (columnWidth) => {
    this.setState({ columnWidth });
  }

  handleGutterChange = (gutter) => {
    this.setState({ gutter });
  }

  handleEasingChange = (easing) => {
    this.setState({ easing });
  }

  handleTransitionChange = (transition) => {
    this.setState({ transition });
  }

  render() {
    const {
      items,
      duration,
      columnWidth,
      gutter,
      easing,
      transition: transitionSelect,
    } = this.state;

    const transition = transitions[transitionSelect];

    return (
      <div>
        <DemoControl
          duration={duration}
          columnWidth={columnWidth}
          gutter={gutter}
          easing={easing}
          transition={transition}
          onShuffle={this.shuffleItems}
          onPrepend={this.prependItem}
          onAppend={this.appendItem}
          onMultipleAppend={this.multipleAppendItem}
          onDurationChange={this.handleDurationChange}
          onColumnWidthChange={this.handleColumnWidthChange}
          onGutterChange={this.handleGutterChange}
          onEasingChange={this.handleEasingChange}
          onTransitionChange={this.handleTransitionChange}
        />

        <StackGrid
          duration={duration}
          columnWidth={columnWidth}
          gutterWidth={gutter}
          gutterHeight={gutter}
          easing={easing}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
          onLayout={() => {
            console.log('[DEMO] `onLayout()` has been called.'); // eslint-disable-line
          }}
        >
          {items.map(item =>
            (<div
              key={item.id}
              className={`item item--${item.modifier}`}
              style={{ height: item.height }}
              onClick={() => this.removeItem(item.id)}
            ><span className='transaction'>Transaction</span>
            <div className='blueBG'><strong>Transaction Hash:</strong> <span className='word-break'>{item.transactionHash}</span></div>
            <div className='blueBG'><strong>Contract Address:</strong> <span className='word-break'>{item.contractAddress}</span></div>
            <div className='greenCheckMark'><img src='http://www.iconsdb.com/icons/preview/green/ok-xxl.png'/></div></div>)
          )}
        </StackGrid>
      </div>
    );
  }
}
