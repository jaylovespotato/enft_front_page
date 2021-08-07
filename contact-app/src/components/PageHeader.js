import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class PageHeader extends Component {
    render(){
        return (            
        <Segment inverted>
            <Header as = 'h1' textAlign='center' >DAO Register Page</Header>
            <Header as = 'h1' color='red' textAlign="center"> ♦ </Header>
            <Header textAlign='center' as = 'h3' >@ENFT</Header>
        </Segment>
        );
    }
}
export default PageHeader;