import React, { Component } from 'react';
import { Table, Segment, Icon, Image, Statistic, Item, Progress, Label, Divider } from 'semantic-ui-react';
import PageHeader from '../components/common/PageHeader';


/// 필요한 DB
// Public_Account - eth_address(매칭용), gov_token_total(투표진행용), eth_gather, eth_remain, nft_total_value, whole_value
// NFT_holdings - project, token_id, price_buy, price_est, 

class PageDaoDetail extends Component {
    render() {
        const {id,
            telegram_id_rep,
            eth_address, 
            underrating_ratio,
            price_collapse_ratio,
            consent_limit,
            index_weight,
            }
             = this.props.location.state

        const style={
        border: '0.2rem',
        padding: '1rem',
        margin: '0rem 0rem 1rem 0rem',
              }
          
        
        const headerClass = "DETAIL"
        return (
            <Segment.Group>
                <Segment>
                    <PageHeader headerClass={headerClass}/>
                </Segment> 
            <Segment>
            <div style = {style} align ='center'>
                <h2><i>Registered Information</i></h2>
                <Divider />
            <Table color = 'blue' key='blue' textAlign='center'>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={2.5}>telegram_id_rep</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>eth_address</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>underrating_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>price_collapse_ratio(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>consent_limit(%)</Table.HeaderCell>
                                    <Table.HeaderCell width={2.5}>index_weight(%)</Table.HeaderCell>
                                    

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
                
              </div>
            </Segment>
            <Divider />
            <Segment>
                <div>
                    <Statistic.Group widths='five'>
                        <Statistic size="huge" color='red'>
                        <Statistic.Label>Total Value</Statistic.Label>
                        <Statistic.Value>10.5 ETH</Statistic.Value>
                
                        </Statistic>

                        <Statistic  color='red'>
                        <Statistic.Label><br>
                        </br>Estimated Value</Statistic.Label>
                        <Statistic.Value>7.5 ETH (+250%)</Statistic.Value>
                
                        </Statistic>

                        <Statistic >
                        <Statistic.Label><br>
                        </br>Invested Balance</Statistic.Label>
                        <Statistic.Value> 3 ETH</Statistic.Value>
                        
                        </Statistic>

                        <Statistic >
                        <Statistic.Label><br>
                        </br>Remained Balance</Statistic.Label>
                        <Statistic.Value> 3 ETH</Statistic.Value>
                        
                        </Statistic>

                        <Statistic size="tiny">
                        <Statistic.Label><br>
                        </br>(My Balance)</Statistic.Label>
                        <Statistic.Value> 0.5 ETH</Statistic.Value>
                        
                        </Statistic>

                    </Statistic.Group>
                </div>
            </Segment>
            <Divider />
            <Segment>

                <div style={style}>
                <h2 align="center"><i>NFT Holdings</i></h2>
                <Divider />
                <br></br>
                    <Item.Group divided>
                        <Item>
                        <Item.Image size='large' src='/ENFT.jpg'
                        fluid
                        label={{
                            color: 'blue',
                            content: 'ON SALE !',
                            icon: 'dollar sign',
                            ribbon: 'right',
                        }}
                        />
                        <Item.Content>
                            <Item.Header>NFT ID : 0x872384989sd</Item.Header>
                            <Item.Meta>
                            <span className='price'>Purchased 2 ETH</span>
                            <span className='date'>in 01/01/2021</span>
                            </Item.Meta>
                            <Item.Extra>
                            <Label>Decentraland</Label>
                            <Label>Land</Label>
                            {/* <Label icon='globe' content='Additional Languages' /> */}
                            <Item>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                            </Item>
                            </Item.Extra>
                            <Item.Description>판매 투표율</Item.Description>
                            <Progress percent={80} inverted progress success>
                                판매가 되기 위해 0표가 더 필요합니다</Progress>
                        </Item.Content>
                        </Item>
                        <br></br>

                        <Item>
                        <Item.Image size='large' src='/logo192.png' />
                        <Item.Content>
                            <Item.Header>NFT ID : 0x872384989sd</Item.Header>
                            <Item.Meta>
                            <span className='price'>Purchased 2 ETH</span>
                            <span className='date'>in 01/01/2021</span>
                            </Item.Meta>
                            <Item.Extra>
                            <Label>Decentraland</Label>
                            <Label>Land</Label>
                            {/* <Label icon='globe' content='Additional Languages' /> */}
                            <Item>
                            여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>
                                여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~ 여기엔 차트가 들어갈거에요~~
                                <br></br>

                            </Item>
                            </Item.Extra>
                            <Item.Description>판매 투표율</Item.Description>
                            <Progress percent={80} inverted progress success>
                                </Progress>
                        </Item.Content>
                        </Item>
                        <br></br>
                    </Item.Group>


                </div>
            </Segment>
          </Segment.Group>
          );


    }
}

export default PageDaoDetail;


