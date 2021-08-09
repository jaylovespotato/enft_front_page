import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class DetailButton extends Component {
    
    render() {
        const { id, telegram_id_rep } = this.props
        
        console.log(this.props.id);
        return (
            <div>
                <button onClick={
                    () => {
                        this.props.history.push(
                            {
                                pathname: `/detail/${id}`,
                                state: {
                                        id: id,
                                        telegram_id_rep: telegram_id_rep,
                                        }
                            })
                        }
                        }>
                            상세보기
                </button>
            </div>
        );
    }
}

export default withRouter(DetailButton);