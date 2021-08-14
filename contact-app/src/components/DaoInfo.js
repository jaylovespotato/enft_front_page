import React, { Component, useState } from 'react';
import { Table, Button, Form} from 'semantic-ui-react';
import { post } from 'axios';

import ButtonForDetail from '../pages/ButtonForDetail';



class DaoInfo extends Component {

    state = {
        final_submit: false,
        editing: false,
        telegram_id_rep: '',
        eth_address: '',
        // buy - voting threshold on evaluated-price
        underrating_ratio: '',
        // sell- voting threshold on ATH
        price_collapse_ratio: '',
        // proportion threshold for purchase
        consent_limit: '',
        // reflection on NFT-index which explains overall NFT market situation
        index_weight: '',
    }
static defaultProps={
        data:[],
        
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState){
            return true
        }
        return this.props.info !== nextProps.info;
    }
    

    handleRemove = ()=>{
        const {info, onRemove }= this.props;
        onRemove(info.id);
    }


    handleToggleEdit = ()=>{
        // true -> false
            // onUpdate 사용해서, 부모 컴포넌트에게 알린다
        // false -> true
            //  state에 info 값 넣기
        const { info, onUpdate } = this.props;
        if (this.state.editing){
            onUpdate(info.id, {
                telegram_id_rep: this.state.telegram_id_rep,
                eth_address: this.state.eth_address,
                underrating_ratio: this.state.underrating_ratio,
                price_collapse_ratio: this.state.price_collapse_ratio,
                consent_limit: this.state.consent_limit,
                index_weight: this.state.index_weight,
                

            })
            console.log(onUpdate)
        } else{
            this.setState({
                telegram_id_rep: info.telegram_id_rep,
                eth_address: info.eth_address,
                underrating_ratio: info.underrating_ratio,
                price_collapse_ratio: info.price_collapse_ratio,
                consent_limit: info.consent_limit,
                index_weight: info.index_weight,

                

            })
        }
        this.setState({
            editing: !this.state.editing,
        })

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value

        })
    }    


    
    addFormSet() {
        const { info } = this.props;

        const url = '/asd';
        const formData = new FormData();

        formData.append('telegram_id_rep', info.telegram_id_rep);
        formData.append('eth_address', info.eth_address);
        formData.append('underrating_ratio', info.underrating_ratio);
        formData.append('price_collapse_ratio', info.price_collapse_ratio);
        formData.append('consent_limit', info.consent_limit);
        formData.append('index_weight', info.index_weight);

        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        return post(url, formData, config);
      }

    handleFormSubmit = (e)=> {
        const {info, onRemove} = this.props;

        if (window.confirm("Once be submitted, it cannot be edited/deleted. Are you sure to submit?")) {
            e.preventDefault();
            this.addFormSet().then((response) => {
                console.log(response.data);
            });
            this.setState({
                final_submit: true
            })
            this.props.onFinalCreate(info);
            onRemove(info.id)
            alert(`form 제출 성공!`);
        }
        
    }

    render() {
        
        const {
            id,
            telegram_id_rep, 
            eth_address, 
            underrating_ratio, 
            price_collapse_ratio,
            consent_limit,
            index_weight,
            final_submit,
             } = this.props.info;

      
        
        const { editing } = this.state;

        const style={
            border: '1px solid white',
            padding: '2rem',
            margin: '0rem 0rem 1rem 0rem',
        }
        
        return (
            <div style={style} align='center'>
                    
                {
                    editing ? (
                        <Table color = 'blue' textAlign='center'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>telegram_id_rep</Table.HeaderCell>
                                    <Table.HeaderCell>eth_address</Table.HeaderCell>
                                    <Table.HeaderCell>underrating_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell>price_collapse_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell>consent_limit(%)</Table.HeaderCell>
                                    <Table.HeaderCell>index_weight(%)</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    

                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="telegram_id_rep"
                                            onChange={this.handleChange}
                                            value={this.state.telegram_id_rep}
                                            
                                        />
                                    </Table.Cell>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="eth_address"
                                            onChange={this.handleChange}
                                            value={this.state.eth_address}
                                        />
                                    </Table.Cell>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="underrating_ratio"
                                            onChange={this.handleChange}
                                            value={this.state.underrating_ratio}
                                        />

                                    </Table.Cell>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="price_collapse_ratio"
                                            onChange={this.handleChange}
                                            value={this.state.price_collapse_ratio}
                                        />
                                    </Table.Cell>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="consent_limit"
                                            onChange={this.handleChange}
                                            value={this.state.consent_limit}
                                    />
                                    </Table.Cell>
                                    <Table.Cell width={2.5}>
                                        <input 
                                            name="index_weight"
                                            onChange={this.handleChange}
                                            value={this.state.index_weight}
                                    />
                                    </Table.Cell>
                                    <Table.Cell width={1.5}>
                                        <Button inverted color='blue' onClick = {this.handleToggleEdit}>APPLY</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        
                        
                    ):(
                        
                        <Form onSubmit={this.handleFormSubmit}>                                
                            
                            <Table color = 'blue' textAlign='center'>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={2.5}>telegram_id_rep</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>eth_address</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>underrating_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>price_collapse_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>consent_limit(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>index_weight(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={1.5}> </Table.HeaderCell>

                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{telegram_id_rep}</Table.Cell>
                                    <Table.Cell>{eth_address}</Table.Cell>
                                    <Table.Cell>{underrating_ratio}</Table.Cell>
                                    <Table.Cell>{price_collapse_ratio}</Table.Cell>
                                    <Table.Cell>{consent_limit}</Table.Cell>
                                    <Table.Cell>{index_weight}</Table.Cell>
                                    
                                        {
                                            final_submit?
                                            (
                                            "")
                                            :
                                            (
                                                <Table.Cell>
                                                <div>
                                                    <Button.Group size='medium'>
                                                    <Button inverted color='blue' onClick = {this.handleToggleEdit}>EDIT
                                                    </Button>
                                                    <Button.Or />
                                                    <Button color='red' onClick={this.handleRemove}>DELETE</Button>
                                                    </Button.Group>
                                                </div>
                                                </Table.Cell>
                                            )
                                        }
                                    
                                </Table.Row>
                                </Table.Body>
                            </Table>
                                {
                                    final_submit?
                                    (<ButtonForDetail 
                                                    
                                        id = {id}
                                        telegram_id_rep={telegram_id_rep}
                                        eth_address={eth_address}
                                        underrating_ratio={underrating_ratio}
                                        price_collapse_ratio={price_collapse_ratio}
                                        consent_limit={consent_limit}
                                        index_weight={index_weight}
                                    />)
                                    :
                                    (
                                    <div>
                                         <Button color='blue'>FINAL SUBMIT</Button>
                                    </div>
                                    )
                                }
                        </Form>
                    )
                }
            </div>
        );
    }
}

export default DaoInfo;