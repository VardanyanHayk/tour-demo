import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
class CarouselPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      windowWidth:''
    }
  }
  componentDidMount(){
    if(window.innerWidth<700)
    {this.setState({windowWidth:window.innerWidth});}
  }
  imagesRendering=()=>{
    if(this.props.images!=null )
    {
    return  this.props.images.map((item,key)=>{
      if(this.props.title[key]!=null)
      {  return(<MDBCarouselItem itemId={key+1}>
          <MDBView>
            <img className="container-fluid m-0 p-0 " src={item} alt="First slide" height={this.state.windowWidth?'400':'600'} />
            <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{this.props.title[key].title}</h3>
            <p>{this.props.title[key].text}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>)}
        else {
          return(<MDBCarouselItem itemId={key+1}>
              <MDBView>
                <img className="container-fluid" src={item} alt="First slide" />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>)
        }

      })
    }
  }
  render(){
  return (
    <div className='container-fluid m-0 p-0'>
      <h4 className="mt-5 mb-2">{this.props.text?this.props.text:null}</h4>
      <MDBCarousel activeItem={1} length={this.props.images.length} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          {this.imagesRendering()}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  )}

}
export default CarouselPage;
