import React from 'react';
import ReactWOW from 'react-wow';
import {Link} from 'react-router-dom';
class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  isOpen=(e)=>{
    this.setState({[e.target.id]:!this.state[e.target.id]})
    console.log(this.state);
  }
  scroll=(e)=>{
    let bb=document.getElementById(`${e.target.value}`);
    if(bb!=null)
    {bb.scrollIntoView({block: "start", behavior: "smooth"});}
    }
  renderImage=()=>{
  return  this.props.images.map((item,key)=>{
        return(  <ReactWOW animation='bounceIn'>
          <div className={`card mt-2 `}>
           <div className="card-header default-color lighten-3 z-depth-1 "  id={`No${key}`} onClick={this.isOpen}>
             <h5 className="text-uppercase mb-0 py-1"id={`No${key}`} onClick={this.isOpen}>
               <a className="white-text font-weight-bold" data-toggle="collapse" id={item} onClick={this.isOpen} aria-expanded="true"
                 aria-controls="collapse96">
                 {this.props.title[key].header}
               </a>
             </h5>
           </div>
           <div id="collapse96" className={this.state[`No${key}`]?'collapse show':'collapse'} role="tabpanel" aria-labelledby="heading96" data-parent="#accordionEx23">
             <div className="card-body">
               <div className="row my-4">
                 <div className="col-md-8">
                   <h2 className="font-weight-bold mb-3 black-text">{this.props.title[key].title}</h2>
                   <p className="">{this.props.title[key].text}</p>
                   <div className='d-flex justify-content-center'>
                    <div className='row'>
                        <button class="btn peach-gradient d-flex justify-content-center" value={this.props.title[key].header} onClick={this.scroll}>{this.props.title.slice(-1)[0].buttonImages}</button>
                      <Link to='/user_registration'>
                        <button class="btn peach-gradient d-flex justify-content-center" >{this.props.title.slice(-1)[0].buttonRegistration}</button>
                      </Link>
                    </div>
                   </div>
                 </div>
                 <div className="col-md-4 mt-3 pt-2">
                   <div className="view z-depth-1">
                     <img src={item} alt="" class="img-fluid"/>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         </ReactWOW>
)

    })
  }
  render(){
    if(this.props.title!=null)
    {return(
    <div class="accordion md-accordion accordion-1" id="accordionEx23" role="tablist">
      {this.renderImage()}
    </div>)
  }
    else {
      return(null)
    }

  }
}

export default Accordion;
