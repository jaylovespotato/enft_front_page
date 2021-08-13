import React, { Component } from 'react';
import PageMain from './pages/PageMain';
import PageDaoDetail from './pages/PageDaoDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'




class App extends Component {
 
    render() {
        return(
        <Router>
            <Switch>
                <Route exact path='/' component={PageMain}/>
                <Route exact path='/detail' component={PageDaoDetail}/>
                <Route exact path='/detail/:id' component={PageDaoDetail}/>
        
            </Switch>
        </Router>
        )
      }
    }
    
    export default App;
