import React, { Component } from 'react';
import { Table, Form, Input } from 'semantic-ui-react';

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
            final_submit: false, 
        })
    }
    render() {
        const style={
            border: '0.2rem',
            padding: '1rem',
            margin: '0rem 0rem 1rem 0rem',
        }

        return (
            <div style={style} align='left'>
                    <h1 >#1. Proposal</h1>
                    <br></br>
                <Form onSubmit={this.handleSubmit}>
                    <Table color = 'blue' textAlign='center'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2.5}>telegram_id_rep</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>eth_address</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>underrating_ratio</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>price_collapse_ratio</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>consent_limit</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>index_weight</Table.HeaderCell>
                                <Table.HeaderCell width={2.5}>Submitted</Table.HeaderCell>
                                <Table.HeaderCell width={0.1}></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <input placeholder="대표자 텔레그램 ID"
                                        name="telegram_id_rep"
                                        onChange={this.handleChange}
                                        value={this.state.telegram_id_rep}
                                        
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <input placeholder="DAO 공동계좌 이더리움 주소"
                                        name="eth_address"
                                        onChange={this.handleChange}
                                        value={this.state.eth_address}
                                        
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <input placeholder="감정가 대비 구매 투표 발동 역치"
                                        name="underrating_ratio"
                                        onChange={this.handleChange}
                                        value={this.state.underrating_ratio}
                                        
                                    />

                                </Table.Cell>
                                <Table.Cell>
                                    <input placeholder="고점 대비 판매 투표 발동 역치"
                                        name="price_collapse_ratio"
                                        onChange={this.handleChange}
                                        value={this.state.price_collapse_ratio}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <input placeholder="투표 시행 동의 비율"
                                        name="consent_limit"
                                        onChange={this.handleChange}
                                        value={this.state.consent_limit}
                                />
                                </Table.Cell>
                                <Table.Cell>
                                    <input placeholder="NFT Index 반영 가중치"
                                        name="index_weight"
                                        onChange={this.handleChange}
                                        value={this.state.index_weight}
                                    />
                                </Table.Cell>
                                <br></br>
                                Not Yet
                                    <input 
                                        type = "hidden"                             
                                        name="final_submit"
                                        value={this.state.final_submit} />
                                <Table.Cell>
                                    <button type="submit">PROPOSAL</button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                </Form>
            </div>
        );
    }
}

export default DaoForm;