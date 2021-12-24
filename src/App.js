import React from 'react'
import Login from './components/Login/Login'
import SideMenu from './components/SideMenu/SideMenu'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Orders from './components/Orders/Orders'



const App = () => {
  return (

    <Router>
      <Route path="/login" exact component={Login} />
      <SideMenu/>
      <div className="containerLayout">

          <Switch>
              <Route path="/orders" exact component={Orders} />
   
          </Switch>

      </div>
 

  
  </Router>

  
  )
}

export default App
