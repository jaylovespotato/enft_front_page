import React, { Component, Fragment } from 'react';
import { post } from 'axios';
import { Table } from 'semantic-ui-react';
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

    handleFormSubmit = (e)=>{
        // const {info, onRemove }= this.props;
        function confirmModal(){
            if (window.confirm("정말 제출을 완료하시겠습니까? 제출을 하시면, 더 이상 변경/삭제가 불가능합니다.")) {
            } 
        }

        confirmModal()
        e.preventDefault();
        this.addFormSet().then((response) => {
            console.log(response.data);
        });

        this.setState({
            final_submit: !this.state.final_submit,
        })
        
        // onRemove(info.id);
        alert(`form 제출 성공!`);
    }


    render() {
        
        const { telegram_id_rep, 
            eth_address, 
            underrating_ratio, 
            price_collapse_ratio,
            consent_limit,
            index_weight,
            id,
             } = this.props.info;

        const { editing, final_submit } = this.state;

        const style={
            border: '1px solid black',
            padding: '4rem',
            margin: '4rem',

        }
        return (
            
                <div style={style}>
                    {
                        editing ? (

                            <Fragment>
                                <div><input 
                                        name="telegram_id_rep"
                                        onChange={this.handleChange}
                                        value={this.state.telegram_id_rep}
                                />
                                </div>
                                <div><input 
                                        name="eth_address"
                                        onChange={this.handleChange}
                                        value={this.state.eth_address}
                                />
                                </div>
                                <div><input 
                                        name="underrating_ratio"
                                        onChange={this.handleChange}
                                        value={this.state.underrating_ratio}
                                />
                                </div>
                                <div><input 
                                        name="price_collapse_ratio"
                                        onChange={this.handleChange}
                                        value={this.state.price_collapse_ratio}
                                />
                                </div>
                                <div><input 
                                        name="consent_limit"
                                        onChange={this.handleChange}
                                        value={this.state.consent_limit}
                                />
                                </div>
                                <div><input 
                                        name="index_weight"
                                        onChange={this.handleChange}
                                        value={this.state.index_weight}
                                />
                                </div>

                            </Fragment>
                            
                        ):(
                                <form onSubmit={this.handleFormSubmit}>                                
                                    
                                    <Table color = 'red' key='red'>
                                        <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>telegram_id_rep</Table.HeaderCell>
                                            <Table.HeaderCell>eth_address</Table.HeaderCell>
                                            <Table.HeaderCell>underrating_ratio</Table.HeaderCell>
                                            <Table.HeaderCell>price_collapse_ratio</Table.HeaderCell>
                                            <Table.HeaderCell>consent_limit</Table.HeaderCell>
                                            <Table.HeaderCell>index_weight</Table.HeaderCell>

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

                                        </Table.Row>
                                        </Table.Body>
                                    </Table>
                                        <div>
                                            {
                                            final_submit?"":<button type="submit">최종제출</button>
                                            }
                                        </div>

                                
                                </form>
                        )
                    }
                        {
                            final_submit?
                                <button>
                                    상세 보기
                                </button>
                            :(
                                <div>
                                    <button onClick={this.handleRemove}>삭제
                                    </button>
                                    <button onClick = {this.handleToggleEdit}>
                                        {
                                            editing? "적용":"수정"
                                        }
                                    </button>
                               </div>
                            )
                        }
                    
                </div>
            
        );
    }
}

export default DaoInfo;