import React, { Component,Fragment } from "react";
import {connect} from 'react-redux';
import {changeLanguage} from '../../store/actions/action';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import armIcon from '../../assets/images/arm.png';
import usaIcon from '../../assets/images/usa.png';
import rusIcon from '../../assets/images/rus.png';
import tour from '../../assets/images/tour.png';
import Loader from './loader';
import {ARM} from '../../assets/languages/languages';
import {ENG} from '../../assets/languages/languages';
import {RUS} from '../../assets/languages/languages';

class Header extends Component {
  constructor(props){
    super(props);
  }
state = {
  isOpen: false,

};


animation=()=>{

  this.setState({anim:'animated jello'})

}
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
changeLanguage=(e)=>{console.log(this.props.language);
  switch (e.target.id) {
    case '0':this.props.changeLang(ARM);break;
    case '1':this.props.changeLang(ENG);break;
    case '2':this.props.changeLang(RUS);break;
      default:
    }
    window.localStorage.setItem('lang',e.target.id)
}

render() {const activeLang=this.props.language.activeLanguage;
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand >
      <MDBNavLink to="/" onClick={this.animation} className={this.state.anim}onAnimationEnd={() => this.setState({ anim:'' })}>
        <img src={tour} alt='tour' width='50'/>
        <strong className="white-text" >ARM TOUR</strong>
        </MDBNavLink>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>

        </MDBNavbarNav>
        <MDBNavbarNav right>
        <div className='col'>
          <div className={this.state.isOpen? 'd-flex justify-content':'d-flex justify-content-end '}>
            <div className='row'>
        <MDBNavItem >
          <MDBNavLink to="/"><h6>{activeLang.home}</h6></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/our_projects"><h6>{activeLang.our_projects}</h6></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/our_team"><h6>{activeLang.our_team}</h6></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
           <MDBDropdown>
             <MDBDropdownToggle nav caret>
               {activeLang.job_reciption}
             </MDBDropdownToggle>
             <MDBDropdownMenu className="dropdown-default" right>
               <MDBDropdownItem href="#!"><h6>{activeLang.job_list}</h6></MDBDropdownItem>
               <MDBDropdownItem href="#!"><h6>{activeLang.contact_us}</h6></MDBDropdownItem>
             </MDBDropdownMenu>
           </MDBDropdown>
         </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="instagram" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="facebook" />
          </MDBNavLink>
          </MDBNavItem>
                </div>
              </div>

              <div className={this.state.isOpen? 'd-flex justify-content':'d-flex justify-content-end '}>
                <div className='row'>
                  <img className='btnIcon'id='0' onClick={this.changeLanguage} alt='' src={armIcon} />
                  <img className='btnIcon'id='1' onClick={this.changeLanguage} alt='' src={usaIcon} />
                  <img className='btnIcon'id='2' onClick={this.changeLanguage} alt='' src={rusIcon} />
                </div>
              </div>
          </div>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}
const mapStateToProps = state => {
  return {
    language:state.lang,
  };

};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changeLang: data => {dispatch(changeLanguage(data))}

    }

  };
export default connect(mapStateToProps,mapDispatchToProps)( Header);
