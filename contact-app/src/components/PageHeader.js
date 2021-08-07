import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';


class PageHeader extends Component {
    render() {
        return (
            <Segment inverted >
                <Header as = 'h1' textAlign='center'>DAO Register Page</Header>
                <Header as = 'h1' textAlign='center' color="red">♦</Header>
                <Header as = 'h3' textAlign='center'>@ENFT</Header>
            </Segment>
        );
    }
}

export default PageHeader;