import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';


class PageHeader extends Component {
    render() {
        return (
            <Segment inverted>
                <Header textAlign='center' as = 'h1' >DAO Register Page</Header>
                <Header as = 'h1' color='red' textAlign="center">♦</Header>
                <Header textAlign='center' as = 'h3' >@ ENFT</Header>
            </Segment>
        );
    }
}

export default PageHeader;