// @flow
import React, { Component } from 'react'

import ImagePort from './ImagePort'

type Props = {};

export default class App extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        Hello, World!
        <ImagePort />
      </div>
    )
  }
}
