import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent'
import CreateAccountComponent from './components/CreateAccountComponent/CreateAccountComponent';
import CityContainer from './containers/CityContainer/CityContainer';
import SearchCitiesContainer from './containers/SearchCitiesContainer/SearchCitiesContainer';
import AddCityComponent from './components/AddCityComponent/AddCityComponent'
import CityItinerariesContainer from './containers/CityItinerariesContainer/CityItinerariesContainer';

class Main extends React.Component {


  render() {

    return (
      <div>
        <Route component={ProfileAndHamburguerContainer} />
        <div className="App">
          <Route component={NavbarComponent} />
          <Switch>
            <Route path='/index' component={HomeContainer} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/create-account' component={CreateAccountComponent} />
            <Route path='/cities/:id' component={CityContainer} />
            <Route path='/search' component={SearchCitiesContainer} />
            <Route path='/add-city' component={AddCityComponent}/>
            <Route path='/itineraries/:city_name' component={CityItinerariesContainer}/>
          </Switch>
          <Route component={FooterComponent} />
          <Redirect exact from="/" to="/index" />
        </div>
      </div>
    );
  }
}

export default Main;
