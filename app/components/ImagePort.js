// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lightbox from 'react-images-extended';
import Gallery from 'react-photo-gallery'

import { Photo } from '../reducers/types'

import _ from 'lodash'

import './ImagePort.css'

type Props = {
    photos: Array<Photo>
}

class ImagePort extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
      
    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
    }

    render(){
        const alt = '../../resources/icon.png'
        const mappedPhotos = _.map(this.props.photos, (photo) => {
            return { ...photo, alt: alt }
        })

        return(
            <div className="image-view">
                <Gallery photos={mappedPhotos} onClick={this.openLightbox} />
                <Lightbox 
                    images={mappedPhotos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    rotatable={true}
                    zoomable={true}
                    showImageCount={true}
                    enableKeyboardInput={true}
                />
            </div>
        )
    }
}

function mapStateToProps({ photos }) {
    return { photos }
}

export default connect(mapStateToProps)(ImagePort)