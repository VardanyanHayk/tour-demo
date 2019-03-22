import React from "react";
import {connect} from 'react-redux';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBNavLink,MDBNavItem,MDBIcon } from "mdbreact";

class FooterPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <MDBFooter color="default-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">{this.props.language.activeLanguage.footerContent}</h5>
            <p>{this.props.language.activeLanguage.footerText}</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );

}
}
const mapStateToProps = state => {
  return {
    language:state.lang,
  };

};
export default connect(mapStateToProps) (FooterPage);
