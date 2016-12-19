import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'
import Home from './Home'
import Login from './Login'
import AboutRoute from './About'
import CounterRoute from './Counter'
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import LoginLayout from '../layouts/LoginLayout/LoginLayout'
import EmailRoute  from './Email'

/* containers */
//import AppContainer from '../containers/App'
//import { Packages, Pkg } from '../containers/packages/Index'
// import Packages from './containers/packages/Packages' import Pkg from
// './containers/packages/Pkg' import LanguageSwitcher from
// './containers/loc/Loc'
//import AwesomeComponent from '../components/loc/AwesomeComponent'
//import SwitchContainer from '../containers/loc/SwitchContainer'
// <Route path='/locs' component ={LanguageSwitcher} />
/*
const routes = ( 
    <Route path = '/' component = { AppContainer } >
        <IndexRedirect to = '/packages/react' / >
        <Route path = '/packages/:keyword' component = { Packages } /> 
        <Route path = '/pkg/:name' component = { Pkg } />
        <Route path = '/locs' component = { AwesomeComponent } /> 
        <Route path = '/langs' component = { SwitchContainer } />  
        <AboutRoute />      
    </Route>
)

export default routes
*/
const routes = function (store) {
//  console.log(CounterRouteA(store));
  // return {
  //   path        : '/',
  //   component   : CoreLayout,
  //   indexRoute  : Login,
  //   childRoutes : [
  //     CounterRoute(store),
  //     AboutRoute(store)
  //   ]
  // }

  return {
    path: '/',
    childRoutes: [
    {
      component: CoreLayout,
      indexRoute  : Home(store),
      childRoutes: [
      CounterRoute(store),
      AboutRoute(store),
          EmailRoute(store)
      ]
    }, 
    {
      component: LoginLayout,  
      //indexRoute: Login(store),
      childRoutes: [
        Login(store)
      ]
    }]
  };

}

export default routes;
