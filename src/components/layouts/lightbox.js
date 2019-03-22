import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import Loader from '../layouts/loader';
import "../css/lightbox.css";
import ReactWOW from 'react-wow';
class LightboxPage extends React.Component {
  constructor(props){
    super(props);
  }
state = {
  photoIndex: 0,
  isOpen: false,
  images: this.props.images
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;
  if(images!=null)
{return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <ReactWOW animation='fadeIn'>
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" className="img-fluid " onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    </ReactWOW>
    );
  })}
}

render() {
const { photoIndex, isOpen, images } = this.state;

  return (
      <div className="container-fluid mt-3">

          <MDBRow>
            {this.renderImages()}
          </MDBRow>

        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </div>
    );
  }
}

export default LightboxPage;
