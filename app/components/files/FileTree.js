import React, { Component } from 'react';

import Directory from './Directory';
import ImageFile from './ImageFile';
import { getAllFiles } from '../../utils/fileUtils';

export default class FileTree extends Component {
  constructor() {
    super();
    this.state = {
      files: this.props ? this.props.files : []
    };
    this.handleDirectoryClick = this.handleDirectoryClick.bind(this);
    this.onFileClick = this.onFileClick.bind(this);
  }

  componentWillReceiveProps({ directory }) {
    if (this.props.openedDirectories && this.props.openedDirectories[directory]) {
      this.setState({ files: this.props.openedDirectories[directory] });
    } 
    else {
      return directory && getAllFiles(directory)
      .then(files => this.setState({ files }))
      .catch(console.error);
    }
  }

  handleDirectoryClick(file) {
    this.props.toggleVisibility(file.filePath);
    if ((this.props.openedDirectories && !this.props.openedDirectories[file.filePath]) 
    || this.props.isVisible[file.filePath]) {
      return getAllFiles(file.filePath)
      .then(files => this.props.dispatchOpenDirectory(file.filePath, files))
      .catch(console.error);
    }
  }

  onFileClick(file) {
    this.props.onFileClick && this.props.onFileClick(file);
  }

  render() {
    const files = this.state.files;

    return (
      files.length > 0 &&
      <ul className="_fileTree">
        {files.map(file => {

          const filePath = file.filePath;
          const fileName = filePath.split('/').slice(-1).join('');

          return file.isDirectory ?
            <li className="_directory" key={filePath + ' Directory'}>
              <div onClick={() => this.handleDirectoryClick(file)}>
                <Directory className="directory" 
                    filepath={file.filePath}
                    visible={this.props.isVisible[file.filePath]} 
                />
              </div>
              {this.props.isVisible[file.filePath] &&
              <FileTree
                directory={file.filePath}
                files={file.files}
                onFileClick={this.props.onFileClick}
                toggleVisibility={this.props.toggleVisibility}
                dispatchOpenDirectory={this.props.dispatchOpenDirectory}
                openedDirectories={this.props.openedDirectories}
                isVisible={this.props.isVisible}
              />}
            </li>
            :
            <li className="_file" 
                key={filePath} 
                onClick={() => this.onFileClick(file)} 
            >
                <ImageFile className="file" filepath={fileName}/>
            </li>;
          })
        }
      </ul>
    );
  }
}