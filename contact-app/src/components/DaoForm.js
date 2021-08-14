import React, { Component } from 'react';
import { Table, Form, Input, Button, Confirm } from 'semantic-ui-react';

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
        final_submit: false,
        
    }

    handleChange = (e)=>{
        
        this.setState({
            //Prevent from inserting "Space"
            [e.target.name]: e.target.value.split(" ").join("")
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
            final_submit: false, 
        })
    }


    handleOnInput = (el, maxlength)=> {
        if(el.value.length > maxlength)  {
          el.value 
            = el.value.substr(0, maxlength);
        }
      }



    render() {
        const style={
            border: '0.2rem',
            padding: '1rem',
            margin: '0rem 0rem 1rem 0rem',
        }

        return (
            <div style={style} align='left'>
                    <h2><i>#1. PROPOSAL</i></h2>
                    <input 
                                        type = "hidden"                             
                                        name="final_submit"
                                        value={this.state.final_submit} />
                    <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Table color='blue' textAlign='center'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>telegram_id_rep</label>
                                        <Input placeholder="대표자 텔레그램 ID"
                                            name="telegram_id_rep"
                                            onChange={this.handleChange}
                                            value={this.state.telegram_id_rep}
                                            // required                                        
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>eth_address</label>
                                        <Input placeholder="DAO 공동계좌 이더리움 주소"
                                            name="eth_address"
                                            onChange={this.handleChange}
                                            value={this.state.eth_address}                                        
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>underrating_ratio(%)</label>
                                        <Input placeholder="감정가 대비 구매 투표 발동 역치"
                                            name="underrating_ratio"
                                            onChange={this.handleChange}
                                            value={this.state.underrating_ratio}
                                            type="number" min="0" max="100" step="0.01"
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>price_collapse_ratio(%)</label>
                                        <Input placeholder="고점 대비 판매 투표 발동 역치"
                                            name="price_collapse_ratio"
                                            onChange={this.handleChange}
                                            value={this.state.price_collapse_ratio}
                                            type="number" min="0" max="100" step="0.01"
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>consent_limit(%)</label>
                                        <Input placeholder="투표 시행 동의 비율"
                                            name="consent_limit"
                                            onChange={this.handleChange}
                                            value={this.state.consent_limit}
                                            type="number" min="0" max="100" step="0.01"                                    
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>
                                    <Form.Field required>
                                        <label>index_weight(%)</label>
                                        <Input placeholder= ''
                                            name="index_weight"
                                            onChange={this.handleChange}
                                            value={this.state.index_weight}
                                            type="number" min="0" max="100" step="0.01"
                                            
                                        />
                                    </Form.Field>
                                </Table.HeaderCell>
                                <Table.HeaderCell width={0.1}>
                                    
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                    <div align="center"><Button color='blue'>PROPOSAL</Button></div>
                    
                </Form>
            </div>
        );
    }
}

export default DaoForm;