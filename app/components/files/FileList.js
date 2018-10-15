import React, { Component } from 'react'
import { connect } from 'react-redux' 
import _ from 'lodash'

import FolderItem from './FolderItem'
import ImageItem from './ImageItem'
import BackListItem from './BackListItem'

import * as actions from '../../actions'

import './files.css'

class FileList extends Component {
    constructor(props){
        super(props)

        this.onFolderClick = this.onFolderClick.bind(this)
        this.onImageClick = this.onImageClick.bind(this)
    }

    componentWillMount() {
        if(!this.props.images || !this.props.images.length){
            this.props.openFolder(this.props.currentFolder)
        }
    }

    onBackClick() {
        this.props.backDirectory()
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
            return <ImageItem filepath={item} onItemClick={this.onImageClick}/>
        }
        else {
            return <FolderItem filepath={item} onItemClick={this.onFolderClick}/>
        }
    }

    render() {
        return (
            <div className="file-list">
                <BackListItem onItemClick={this.onBackClick}/>
                { _.map(this.props.images, (item)=> {
                    this.renderFileItem(item)
                })}
            </div>
        )
    }
}

const mapStateToProps = ({ images }) => ({ images })

export default connect(mapStateToProps, actions)(FileList)