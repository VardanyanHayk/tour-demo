import React from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import EdgeHeaderPage from '../layouts/edgeheader';

class EdgePage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){return(
    <div className='container-fluid m-0 p-0'>
      <Header/>
      <EdgeHeaderPage/>
      <Footer/>
    </div>
  )}
}
export default EdgePage;
