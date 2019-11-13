import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ProfileAndHamburguerContainer from './containers/ProfileAndHamburguerContainer/ProfileAndHamburguerContainer'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent'
import CreateAccountComponent from './components/CreateAccountComponent/CreateAccountComponent';
import CityContainer from './containers/CityContainer/CityContainer';

class Main extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
      response: '',
      post: '',
      responseToPost: '',
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };


  render(){

    return (
      <div>
      <Route component={ProfileAndHamburguerContainer} />
      <div className="App">
        <Route component={NavbarComponent} />
        <Switch>
          <Route path='/index' component={HomeContainer} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/create-account' component={CreateAccountComponent}/>
          <Route path='/city/:id' component={CityContainer}/>
        </Switch>
        <Route component={FooterComponent} />
        <Redirect exact from="/" to="/index" />
      </div>
      <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
    </div>
  );
}
}

export default Main;
