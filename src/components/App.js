import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import history from '../history'

import Navbar from './Navbar'
import MyHelps from './MyHelps'
import Mural from './Mural'
import Login from './Login'
import Signup from './Signup'
import CreateHelpForm from './CreateHelpForm'
import DeleteHelp from './DeleteHelp'

class App extends Component {
  state = {
    isLogedIn: false,
    id: '',
  }

  handleLogIn = (isLogedIn, id) => {
    this.setState({ isLogedIn: isLogedIn, id: id })
  }
  render() {
    return (
      <Router history={history}>
        <Navbar id={this.state.id} />
        <Switch>
          <Route exact path="/:id/MyHelps" component={MyHelps} />
          <Route
            exact
            path="/Login"
            render={(props) => {
              return <Login {...props} handleLogIn={this.handleLogIn} />
            }}
          />
          <Route exact path="/:id/CreateHelpsForm" component={CreateHelpForm} />
          <Route
            exact
            path="/Signup"
            render={(props) => {
              return <Signup {...props} handleLogIn={this.handleLogIn} />
            }}
          />
          <Route exact path="/" component={Mural} />
          <Route
            path="/:userID/deleteQuestion/:questionID"
            component={DeleteHelp}
          />
        </Switch>
      </Router>
    )
  }
}

export default App

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route exact path="/Mural" component={Mural} />
//           <Route path="/MyHelps" component={MyHelps} />
//           <Route path="/" component={Login} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
