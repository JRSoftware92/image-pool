import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lightbox from 'react-images-extended';
import Gallery from 'react-photo-gallery'

import _ from 'lodash'

import './ImagePort.css'

class ImagePort extends Component {
    constructor(props) {
        super(props);

        this.state = { currentImage: props.activeImage > 0 ? props.activeImage : 0 };
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
        const alt = 'resources/icons/icon.png'
        const mappedImages = _.map(this.props.images, (image) => {
            return { src: image, alt: alt }
        })

        return(
            <div className="image-view">
                <Lightbox 
                    images={mappedImages}
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

function mapStateToProps({ images, activeImage }) {
    return { images, activeImage }
}

export default connect(mapStateToProps)(ImagePort)