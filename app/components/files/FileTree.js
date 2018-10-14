// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Directory from './Directory';
import ImageFile from './ImageFile';
import { toggleVisibility, openDirectory } from '../../actions'
import { getAllFiles } from '../../utils/fileUtils';

type Props = {
    +openedDirectories: Object,
    +visibleDirectories: Object,
    +openDirectory: Function,
    +onFileClick: Function,
    +toggleVisibility: Function,
}

// https://github.com/mperitz/react-filetree-electron
class FileTree extends Component<Props> {
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
    || this.props.visibleDirectories[file.filePath]) {
      return getAllFiles(file.filePath)
      .then(files => this.props.openDirectory(file.filePath, files))
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
                    visible={this.props.visibleDirectories[file.filePath]} 
                />
              </div>
              {this.props.visibleDirectories[file.filePath] &&
              <FileTree
                directory={file.filePath}
                files={file.files}
                onFileClick={this.props.onFileClick}
                toggleVisibility={this.props.toggleVisibility}
                openDirectory={this.props.openDirectory}
                openedDirectories={this.props.openedDirectories}
                visibleDirectories={this.props.visibleDirectories}
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

const mapStateToProps = ({ fileTree }) => ({
    visibleDirectories: fileTree.visibleDirectories,
    openedDirectories: fileTree.openedDirectories
})

export default connect(mapStateToProps, { toggleVisibility, openDirectory })(FileTree)
