import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';


class PageHeader extends Component {
    
    render(){


        return (            
        <Segment size="tiny">
            <Header as = 'h1' color='blue' textAlign="center"> DAO {this.props.headerClass} </Header>
        </Segment>
        );
    }
}
export default PageHeader;