import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:例句鈕仔');

export default class 例句鈕仔 extends React.Component {

  render() {
    let { 外語, 文本資料, 音標資料, 開例句 } = this.props;
    return (
    <span className=''>
      <button
        onClick={開例句.bind(this, 外語, 文本資料, 音標資料)}
        className='ui compact icon button'>
        <i className='icon content'></i>
      </button>
    </span>
    );
  }
}

