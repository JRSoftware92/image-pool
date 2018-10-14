import React, { Component } from 'react';

import FileTree from './FileTree';

import { readFile } from '../../utils/fileUtils';

//https://github.com/mperitz/react-filetree-electron
class FileSelector extends Component {
  constructor() {
    super();
    this.state = {
      directory: ''
    };
    this.selectFile = this.selectFile.bind(this);
    this.clickTest = this.clickTest.bind(this);
  }

  // componentDidMount() {
  //   this.refs.local.setAttribute('webkitdirectory', true);
  //   this.refs.local.setAttribute('directory', true);
  // }

  selectFile(ev) {
    let directory = ev.target.files[0].path;
    if (directory[directory.length - 1] === '/') {
      directory = directory.slice(0, directory.length - 1);
    }
    this.setState({ directory });
  }

  clickTest(file) {
    return readFile(file.filePath)
    .then(contents => console.log(contents.toString()))
    .catch(console.error.bind(console));
  }

  render() {
    return (
      <div>
        <input id="file-selector" type="file" onChange={this.selectFile} webkitdirectory="true" directory="true" />
        <FileTree
          directory={this.state.directory}
          onFileClick={this.clickTest}
        />
      </div>
    );
  }
}

export default FileSelector