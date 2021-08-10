import React, { Component } from 'react';
import PageMain from './components/PageMain';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageDaoDetail from './components/PageDaoDetail';
import PageFinalDaoList from './components/PageFinalDaoList';

class App extends Component {
 
    render() {
        return(

        <Router>
            <Switch>
                <Route exact path='/' component={PageMain}/>
                <Route exact path='/daos' component={PageFinalDaoList}/>
                <Route exact path='/detail' component={PageDaoDetail}/>
                <Route exact path='/detail/:id' component={PageDaoDetail}/>
        
            </Switch>
        </Router>
        )
      }
    }
    
    export default App;
