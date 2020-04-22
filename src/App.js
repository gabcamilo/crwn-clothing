import React, {Component} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';
import { Route, Switch } from "react-router-dom";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null      
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () =>{
            console.log(this.state)
          });
        })
      }

      this.setState({ currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
