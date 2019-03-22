import React from 'react';
import Jumbotron from '../layouts/jumbotron';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import {connect} from 'react-redux';
import filipins from '../../assets/images/filipins.jpg';
import madagaskar from '../../assets/images/madagaskar.jpg';

class OurProjects extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let activeLang=this.props.language.activeLanguage;
    return(
    <div className='container-fluid m-0 p-0'>
      <Header/>
      {this.props.language.activeLanguage?<Jumbotron images={[madagaskar,filipins]} title={activeLang.jumbotron}/>:null}
      <Footer/>
    </div>
  )}
}
const mapStateToProps = state => {
  return {
    language:state.lang,
  };

};
export default connect(mapStateToProps) (OurProjects);
