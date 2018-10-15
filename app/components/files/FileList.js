import React, { Component } from 'react'
import { connect } from 'react-redux' 
import _ from 'lodash'

import FolderItem from './FolderItem'
import ImageItem from './ImageItem'

import * as actions from '../../actions'

import './files.css'

class FileList extends Component {
    constructor(props){
        super(props)

        this.onFolderClick = this.onFolderClick.bind(this)
        this.onImageClick = this.onImageClick.bind(this)
    }

    onImageClick(imagePath) {
        this.props.loadImage(imagePath)
    }

    onFolderClick(folderPath) {
        this.props.openFolder(folderPath)
    }

    renderFileItem(item) {
        const isImage = /^([^\.\s]+)(\.jpg|\.gif|\.png)/.test(item)
        
        if(isImage){
            return <ImageItem filepath={item} onItemClick={onImageClick}/>
        }
        else {
            return <FolderItem filepath={item} onItemClick={onFolderClick}/>
        }
    }

    render() {
        return (
            <div className="file-list">
                { _.map(this.props.files, (item)=> {
                    this.renderFileItem(item)
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ files }) => ({ files })

export default connect(mapStateToProps, actions)(FileList)