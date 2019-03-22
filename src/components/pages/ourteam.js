import React from 'react';
import Header from'../layouts/header';
import Footer from '../layouts/footer';
import LightboxPage from '../layouts/lightbox'

const importAll=(r)=> {
  return r.keys().map(r);
}
const images1 = importAll(require.context('../../assets/images/ourteam/ligthbox', false, /\.(png|jpe?g|svg|jpg|JPG)$/));
class OurTeam extends React.Component{
  constructor(props){
    super(props);
  }

  render(){return(
    <div className='container-fluid m-0 p-0'>
      <Header/>
      <LightboxPage images={images1}/>
      <Footer/>
    </div>
  )}
}

export default OurTeam;
