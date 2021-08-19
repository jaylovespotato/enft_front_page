import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Divider, Input } from 'semantic-ui-react';

import PageHeader from '../components/common/PageHeader';
import DaoForm from '../components/DaoForm';
import DaoInfoList from '../components/DaoInfoList';
import FinalDaoList from '../components/FinalDaoList';


class PageMain extends Component {

  id=1;
  
  state= {
  information:[
    {
      id:0,
      telegram_room_id: '-12345',
      eth_address: '0x23123',
      underrating_ratio: '30',
      price_collapse_ratio: '30',
      consent_limit: '50',
      index_weight: '20',
      final_submit: false,
    },
  ],
  finalinformation:[],

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
      })
  })
}

handleFinalCreate= (data) =>{
  const {finalinformation} = this.state;
  this.setState({
    finalinformation: finalinformation.concat({
      ...data, final_submit:true})
  })
}



handleRemove = (id) =>{
  const {information} = this.state;
  this.setState({
    information: information.filter(info => (info.id !== id))
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
    const { information, keyword, finalinformation} = this.state;


    const filteredFinalList = finalinformation.filter(
      info => ((info.telegram_room_id.indexOf(keyword) !== -1)|(String(info.id) === keyword))
    );


    const style={
      border: '0.2rem',
      padding: '1rem',
      margin: '0rem 0rem 1rem 0rem',
  }


    const headerClass = "MANAGEMENT"

    return (
    <Segment.Group>
      <Segment>
      <PageHeader headerClass={headerClass}/>
      </Segment> 
      <Segment>
      <div style={style}>
        <DaoForm onCreate={this.handleCreate} />        
        <Divider />
          <div align='left'>
          <h2><i>#2. FINAL Check & Submit</i></h2>
                    <br></br>

              <DaoInfoList 
                data = {information}
                onFinalCreate = {this.handleFinalCreate}
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}  
              />
          </div>     
        
        <Divider />
        <div align='left'>
          <h2><i>#3. Management</i></h2>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Input 
            focus
            icon ="search"
            size = "small"
            placeholder="DAO ID or Telegram ID" 
            onChange={this.handleChange}
            value={keyword}
          />
        
        <FinalDaoList 
                finaldata = {filteredFinalList}
                />
        </div>
      </div>
      </Segment>

    </Segment.Group>
    );
    }
  }

export default PageMain;