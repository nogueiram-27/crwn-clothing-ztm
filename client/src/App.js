import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles'

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({ currentUser, checkUserSession }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  
  return (
    <div >
      <GlobalStyle/>
      <Header/>
        <Switch>
        <Route exact={true} path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => 
          currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}
        />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
