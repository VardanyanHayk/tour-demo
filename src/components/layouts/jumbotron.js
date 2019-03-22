import React from 'react';

class Jumbotron extends React.Component{
  constructor(props){
    super(props);
  }
  renderImage=()=>{
    return this.props.images.map((item,key)=>{
      return(
        <div className='card mt-4 ' style ={ { backgroundImage: "url("+item+")" } }>

          <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
              <h2 class="card-title h2 my-4 py-2">{this.props.title[key].name}</h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">{this.props.title[key].text}</p>
              <a class="btn peach-gradient"><i class="fas fa-clone left"></i> View project</a>

            </div>
          </div>
        </div>
      )
    })
  }
render(){return(
<div className='container-fluid m-0 p-0'>
    {this.renderImage()}
  </div>
)}


}
export default Jumbotron;
