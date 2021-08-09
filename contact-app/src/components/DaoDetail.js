import React, { Component, Fragment } from 'react';
import DaoInfo from './DaoInfo';

class DaoDetail extends Component {
    render() {
        const id = this.props.location.state.id
        const telegram_id_rep = this.props.location.state.telegram_id_rep
        return (
            <Fragment>
                <div><h1>id:{id}</h1></div>
                <div><h1>telegram_id_rep:{telegram_id_rep}</h1></div>

            </Fragment>
                );
    }
}

export default DaoDetail;


