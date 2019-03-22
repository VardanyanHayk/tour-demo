import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './components/pages/homepage';
import Error from './components/layouts/error404';
import OurTeam from './components/pages/ourteam';
import EdgePage from './components/pages/edgeheaderpage';
import OurProjects from './components/pages/ourprojects';
import {changeLanguage} from './store/actions/action';
import {connect} from 'react-redux';
import {ARM} from './assets/languages/languages';
import {ENG} from './assets/languages/languages';
import {RUS} from './assets/languages/languages';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      language:'',
      loaded:false
    }
  }

  componentDidMount(){
    let lang=window.localStorage.getItem('lang');
        switch (lang) {
          case '0':this.props.changeLang(ARM);break;
          case '1':this.props.changeLang(ENG);break;
          case '2':this.props.changeLang(RUS);break;
      }
console.log(this.props.language.activeLanguage);
}
  render() {
    return (

        <Route>
          <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/our_team" exact component={OurTeam} />
            <Route path="/our_projects" exact component={OurProjects} />
            <Route path="/user_registration" exact component={EdgePage} />
            <Route component={Error}/>
          </Switch>
          </div>
        </Route>

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
export default connect(mapStateToProps,mapDispatchToProps)(App);
