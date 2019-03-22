import React from 'react';

class ImageMixed extends React.Component{
  constructor(props){
    super(props);
  }

  rendeImage=()=>{
    let count=0;
    if(this.props.images)
    {
    return  this.props.images.map((item,key)=>{
        if(count<4)
        { count++
          return (<figure class="col-md-3">
            <img src={item} class="img-fluid"/>
        </figure>)
        }
        else if (count<7)
        {
          count++
            return (<figure class="col-md-4">
              <img src={item} class="img-fluid"/>
          </figure>)
        }
        else {
          count=0;
        }
      })
    }
  }

  render(){return(

<div class="container-fluid m-0 p-0"  id={this.props.text}>
<h4 className="mt-5 mb-2" >{this.props.text}</h4>


  <div class="col-md-12" id={this.props.text}>

    <div id="mdb-lightbox-ui"></div>
    <div className='row'>
    {this.rendeImage()}
    </div>
    <div class="mdb-lightbox">
    </div>
  </div>
</div>

  ) }
}

export default ImageMixed;
