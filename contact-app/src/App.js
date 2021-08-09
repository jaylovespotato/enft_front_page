import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DaoDetail from './components/DaoDetail';

class App extends Component {
 
    render() {
        return(

        <Router>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/detail' component={DaoDetail}/>
                <Route exact path='/detail/:id' component={DaoDetail}/>
        
            </Switch>
        </Router>
        )
      }
    }
    
    export default App;
