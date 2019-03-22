import React from 'react';
import Header from'../layouts/header';
import Footer from '../layouts/footer';
import CarouselPage from '../layouts/carousel';
import Accordion from '../layouts/accordion';
import ImageMixed from '../layouts/imagemixed';
import {connect} from 'react-redux';
const importAll=(r)=> {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/ourteam/carousel', false, /\.(png|jpe?g|svg|jpg|JPG)$/));
const rio = importAll(require.context('../../assets/images/rio', false, /\.(png|jpe?g|svg|jpg|JPG)$/));
const georgia = importAll(require.context('../../assets/images/georgia', false, /\.(png|jpe?g|svg|jpg|JPG)$/));
const cuba = importAll(require.context('../../assets/images/cuba', false, /\.(png|jpe?g|svg|jpg|JPG)$/));
const indonesia = importAll(require.context('../../assets/images/indonesia', false, /\.(png|jpe?g|svg|jpg|JPG)$/));



class HomePage extends React.Component{
constructor(props){
  super(props);
}

  render(){
    const activeLang=this.props.language.activeLanguage;

    return(<div className='container-fluid m-0 p-0'>
            <Header/>
            <CarouselPage text={activeLang.carouseltext} images={images} title={activeLang.carousel}/>
            <Accordion images={images} title={activeLang.accordion}/>
            <ImageMixed images={georgia} text={activeLang.accordion[0].header}/>
            <ImageMixed images={cuba} text={activeLang.accordion[1].header}/>
            <ImageMixed images={indonesia} text={activeLang.accordion[2].header}/>
            <ImageMixed images={rio} text={activeLang.accordion[3].header}/>
            <Footer/>
            </div>
            )


  }
}
const mapStateToProps = state => {
  return {
    language:state.lang,
  };

};

export default connect(mapStateToProps)( HomePage);
