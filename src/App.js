import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import FilesList from './components/FilesList';
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoutes';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

const App = () =>  (
   <BrowserRouter>
   <AuthProvider>
   <div className="container">
     <div className="main-content">
    <Switch>
      <PrivateRoute path="/" exact component={Home}/>
      <PrivateRoute path="/lists" component={FilesList}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route path="/forgot-password" component={ForgotPassword}/>
    </Switch>
     </div>
     </div>
   </AuthProvider>
   </BrowserRouter>

  )

export default App;