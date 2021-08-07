import React, { Component, Fragment } from 'react';
import DaoForm from './components/DaoForm';
import DaoInfoList from './components/DaoInfoList';


import PageHeader from './components/PageHeader';
import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';

class App extends Component {

  id=3;
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
  finalinfo:[],


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

handleCopy=(id)=>{
  const {information, finalinfo} = this.state;
  this.setState({
    finalinfo: information.map(
      info=>{
        if((info.id===id)&(info.final_submit!==false)){
          return{id,
          ...info
        }
        }return info;
      }
    ) 
  })
}


  render() {
    const { information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.telegram_id_rep.indexOf(keyword) !== -1
    );

    const finalList = information.filter(
      info => info.final_submit !== false
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
              <p>
                <input
                  placeholder ="검색할 텔레그램 ID를 입력하세요"
                  onChange = {this.handleChange}
                  value = {keyword}
                />
              </p>
          <div>
              <DaoInfoList 
                data = {filteredList}
                finaldata = {finalList}
                onRemove = {this.handleRemove}
                onUpdate = {this.handleUpdate}
                onCopy={this.handleCopy}
                
              />
          </div>     
          </div>
        </div>
      </Segment>
    </Segment.Group>
    );
    }
  }

export default App;