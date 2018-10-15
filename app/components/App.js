  import React, { Component } from 'react'

import FileList from './files/FileList'
import ImagePort from './ImagePort'

export default class App extends Component {
  render() {
    return (
      <div>
        Welcome to ImagePool!
        <FileList />
      </div>
    )
  }
}
