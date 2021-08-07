import React, { Component } from 'react';

class DaoForm extends Component {

    state ={

        telegram_id_rep: '',        
        eth_address:'',
        // buy - voting threshold on evaluated-price
        underrating_ratio: '',
        // sell- voting threshold on ATH
        price_collapse_ratio: '',
        // proportion threshold for purchase
        consent_limit: '',
        // reflection on NFT-index which explains overall NFT market situation
        index_weight: '',

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        this.props.onCreate(this.state);
        this.setState({
            telegram_id_rep:'',
            eth_address:'',
            underrating_ratio: '',
            price_collapse_ratio: '',
            consent_limit: '',
            index_weight: '',    
        })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input placeholder="대표자 텔레그램 ID"
                name = "telegram_id_rep"
                onChange={this.handleChange}
                //이 value는 e.target.value가 아님. 인풋태그에 들어가는 value가 e.target.value임.
                //인풋 value는 초기화용
                value={this.state.telegram_id_rep}
                />
                
                <input placeholder="DAO 공동계좌 이더리움 주소"
                name = "eth_address"
                onChange={this.handleChange}
                 value={this.state.eth_address}
                  />

                <input placeholder="감정가 대비 구매 투표 발동 역치"
                name = "underrating_ratio"
                onChange={this.handleChange}
                 value={this.state.underrating_ratio}
                  />

                <input placeholder="고점 대비 판매 투표 발동 역치"
                name = "price_collapse_ratio"
                onChange={this.handleChange}
                 value={this.state.price_collapse_ratio}
                  />

                <input placeholder="투표 시행 동의 비율"
                name = "consent_limit"
                onChange={this.handleChange}
                 value={this.state.consent_limit}
                  />

                <input placeholder="NFT Index 반영 가중치"
                name = "index_weight"
                onChange={this.handleChange}
                 value={this.state.index_weight}
                  />
                  
                <button type = "submit">등록</button>
                
            </form>
        );
    }
}

export default DaoForm;