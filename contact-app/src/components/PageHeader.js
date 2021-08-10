import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class PageHeader extends Component {
    
    render(){
        const { headerClass } = this.props;

        return (            
        <Segment inverted size="tiny">
            <Header as = 'h2' textAlign='center' >DAO {headerClass} Page</Header>
            <Header as = 'h1' color='red' textAlign="center"> ♦ </Header>
            <Header textAlign='center' as = 'h4' >@ENFT</Header>
        </Segment>
        );
    }
}
export default PageHeader;