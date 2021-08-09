import React, { Component } from 'react';


import DaoForm from './DaoForm';
import DaoInfoList from './DaoInfoList';


import PageHeader from './PageHeader';
import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';


class Main extends Component {

  id=1;
  state= {
  information:[
    {
      id:0,
      telegram_id_rep: '부산감자',
      eth_address: '0x23123',
      underrating_ratio: '30',
      price_collapse_ratio: '30',
      consent_limit: '50',
      index_weight: '20',
      final_submit: false,
    },
  ],



  keyword:''
  }


handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

handleCreate= (data) =>{
  const {information} = this.state;
  this.setState({
    information: information.concat({
      ...data,
      id:this.id++,
      final_submit: false})
  })
}

handleRemove = (id) =>{
  const {information} = this.state;
  this.setState({
    information: information.filter(info => info.id !== id)
  })
}

handleUpdate = (id, data)=>{
  const {information} = this.state;
  this.setState({
    information: information.map(
      info=>{
        if (info.id === id){
          return{id,
            ...data,
          }
        }
        return info;
      }
    )
  })
}



  render() {
    const { information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.telegram_id_rep.indexOf(keyword) !== -1
    );


    const style={
      border: '1px solid black',
      padding: '4rem',
      margin: '4rem',
  }


    return (
    <Segment.Group>
      <Segment>
        <PageHeader />
      </Segment> 
      <Segment>
      <div style={style}>
        <DaoForm onCreate={this.handleCreate} />        
          <div align='center'>
              <DaoInfoList 
                data = {filteredList}
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}  
              />
          </div>     
        </div>
      </Segment>
    </Segment.Group>
    );
    }
  }

export default Main;