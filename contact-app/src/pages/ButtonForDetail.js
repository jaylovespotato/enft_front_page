import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

class ButtonForDetail extends Component {
    
    render() {
        const { id, 
            telegram_id_rep, 
            eth_address, 
            underrating_ratio,
            price_collapse_ratio,
            consent_limit,
            index_weight,

            } = this.props
        
        console.log(this.props.id);
        return (
            <div>
                <Button 
                    inverted color='blue'
                    onClick={
                        () => {
                            this.props.history.push(
                                {
                                    pathname: `/detail/${id}`,
                                    state: {
                                            id: id,
                                            telegram_id_rep: telegram_id_rep,
                                            eth_address: eth_address,
                                            underrating_ratio: underrating_ratio,
                                            price_collapse_ratio: price_collapse_ratio,
                                            consent_limit: consent_limit,
                                            index_weight: index_weight
                                            }
                                })
                            }
                            }>
                                VIEW DETAIl
                </Button>
            </div>
        );
    }
}

export default withRouter(ButtonForDetail);