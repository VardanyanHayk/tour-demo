import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

class MultiCarouselPage extends React.Component {
  constructor(props){
    super(props);

  this.state = {
    windowWidth:'',
    length:''
  }
}

  componentDidMount(){
    this.setState({windowWidth:window.innerWidth});
    this.setState({legth:this.props.images.length/2});
  }
  minPageImageRend=()=>{
    if(this.props.images!=null)
    {
      return this.props.images.map((item,key)=>{
      return  (<MDBCarouselItem itemId={key+1}>
          <MDBCol md="4">
            <MDBCard className="mb-2">
              <MDBCardImage className="img-fluid" src={item} />
              <MDBCardBody>
                <MDBCardTitle>MDBCard title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn color="primary">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBCarouselItem>)
      })
    }
  }
  maxPageImageRend=()=>{

    let count=0;
    if(this.props.images!=null){
      return this.props.images.map((item,key)=>{

          count+=1;console.log(count);
          return (
            <MDBCarouselItem itemId={count}>
            <MDBRow>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={this.props.images[key]}/>
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={this.props.images[key+1]?this.props.images[key+1]:this.props.images[0]} />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={this.props.images[key+2]?this.props.images[key+2]:this.props.images[1]}/>
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
          )

      })
    }
  }
  render(){if(this.state.windowWidth>770)
  {return (  <div className='container-fluid m-0 mt-2 p-0'>
      <MDBCarousel activeItem={1} length={this.props.images.length} showControls={true} showIndicators={false} className="z-depth-2">
        <MDBCarouselInner>
          {this.maxPageImageRend()}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>

  )}
  else {
    return(
      <div className='container-fluid m-0 mt-2 p-0'>
        <MDBCarousel activeItem={1} length={this.props.images.length} showControls={true} showIndicators={false} className="z-depth-2">
          <MDBCarouselInner>
            {this.minPageImageRend()}
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    )
  }
};
}

export default MultiCarouselPage;
