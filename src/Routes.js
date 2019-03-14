import React from 'react'
import { Switch, Route } from 'react-router-dom';

//ROUTES DEPENDENCIES
import HomeContainer from './Containers/Home_Container';
import StoreContainer from './Containers/Store_Container'
import ShopSingleContainer from './Containers/ShopSingle_Container'
import NoMatches from './Components/NoMatches'
import ContactContainer from './Containers/Contact_Container'
import AboutContainer from './Containers/About_Container'
import Register from './Components/Register_Login/Register'
import RegisterLogin from './Components/Register_Login'
import Dashboard from  './Containers/Dashboard_Container'
import Auth from './utils/hoc/Auth'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomeContainer} />
      <Route path='/user/dashboard' exact component={Auth(Dashboard, true)} />
      <Route path='/register' exact component={Register} />
      <Route path='/register_login' exact component={RegisterLogin} />
      <Route path='/shop' exact component={StoreContainer} />
      <Route path='/shop/:id' exact component={ShopSingleContainer} />
      <Route path='/contact' exact component={ContactContainer} />
      <Route path='/about' exact component={AboutContainer} />
      <Route component={NoMatches} />
    </Switch>
  )
}

export default Routes
