import React, { Component } from 'react';
import { Table, Segment, Statistic, Item, Progress, Label, Divider } from 'semantic-ui-react';
import PageHeader from '../components/common/PageHeader';
import EstimateChart from '../components/common/EstimateChart';


import axios from "axios";

/// 필요한 DB
// Public_Account - eth_address(매칭용), gov_token_total(투표진행용), eth_gather, eth_remain, nft_total_value, whole_value
// NFT_holdings - project_address, token_id, price_buy, price_est, on_sale
// Member_transactions - gov_token_trade, eth_trade

class PageDaoDetail extends Component {

    // JSON 불러오기 위한 코드들
    state = {
        loading: false,
        ItemList: []  // 비어있는 배열
     };

     loadItem =  async () => {
        await axios
          .post("http://localhost:5000/daoDetail/", {'chat_room_id': '-443191914'},
              {
                // headers: {
                //     'content-type': 'application/json',
                //     'Access-Control-Allow-Origin': true
                // }
             }
          )
          .then(({ data }) => {
              console.log(data)
              // const {estimated_value, invested_value, remained_balance } = data;
              this.setState(data)
          })
          .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
            this.setState({
              loading: false
            });
          });
      };

      async componentDidMount() {
          console.log("mounted")

          await this.loadItem();

          console.log(this.state.estimated_value);


      }


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

        // const { ItemList } = this.state; // Json형태의 ItemList 불러오기


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
                        <Statistic.Value>${this.state.estimated_value}</Statistic.Value> {/* Public_Account - whole_value */}
                
                        </Statistic>

                        <Statistic  color='red'>
                        <Statistic.Label><br>
                        </br>Estimated Value</Statistic.Label>
                        <Statistic.Value>7.5 ETH (+250%)</Statistic.Value> {/* Public_Account - nft_total_value */}
                
                        </Statistic>

                        <Statistic >
                        <Statistic.Label><br>
                        </br>Invested Balance</Statistic.Label>
                        <Statistic.Value> 3 ETH</Statistic.Value> {/* Public_Account - (eth_gathered - eth_remain) */}
                        
                        </Statistic>

                        <Statistic >
                        <Statistic.Label><br>
                        </br>Remained Balance</Statistic.Label>
                        <Statistic.Value> 3 ETH</Statistic.Value> {/* Public_Account - eth_remain */}
                        
                        </Statistic>

                        <Statistic size="tiny">
                        <Statistic.Label><br>
                        </br>(My Balance)</Statistic.Label> {/* Member_transactions - eth_trade  이용해서? 근데 Member가 어느 project 에 소속돼있는 지 필요할 듯! */}
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
                    <Item.Group divided>                                        {/* NFT_holding - on_sale */}
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
                            <Item.Header>NFT ID : 0x872384989sd</Item.Header> {/* NFT_holding - token_id */}
                            <Item.Meta>
                            <span className='price'>Purchased 2 ETH</span> {/* NFT_holding - price_buy */}
                            <span className='date'>in 01/01/2021</span>
                            </Item.Meta>
                            <Item.Extra>
                            <Label>Decentraland</Label>                 {/* NFT_holding - project */}
                            <Label>Land</Label>                         {/* NFT_holding - project */}
                            {/* <Label icon='globe' content='Additional Languages' /> */}
                            <Item>
                                
                            <EstimateChart/>                            {/* NFT_holding - price_est 이거 historical 하게 필요 */}
                            {/* 실제 들어갈 땐 이렇게 props로 넘겨줘야함 */}
                            {/* <EstimateChart
                            price_est_set = {this.state.itemlist{'price_est_set'}}
                            price_buy = {this.state.itemlist{'price_buy'}}
                            /> */}

                            </Item>
                            </Item.Extra>
                            <Item.Description>Sales Turnout</Item.Description>
                            <Progress percent={80} inverted progress success> {/* 이거는,, 판매 투표율인데 판매 투표 event 때 telegram으로부터 받아와야할듯 */}
                                0 Consent Needed for Sale</Progress>
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


