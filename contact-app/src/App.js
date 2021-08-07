import React, { Component, Fragment } from 'react';
import DaoForm from './components/DaoForm';
import DaoInfoList from './components/DaoInfoList';
import PageHeader from './components/PageHeader';



class App extends Component {

  id=3;
  state= {
  information:[
    {
      id:0,
      telegram_id_rep: '낭만감자',
      eth_address: '0x23123',
      underrating_ratio: '30',
      price_collapse_ratio: '30',
      consent_limit: '50',
      index_weight: '20',    
      
    },

    {
      id:1,
      telegram_id_rep: '맛있는감자',
      eth_address: '0x1111111',
      underrating_ratio: '20',
      price_collapse_ratio: '20',
      consent_limit: '50',
      index_weight: '0',      
    },

    {
      id:2,
      telegram_id_rep: '부산감자',
      eth_address: '0x333333',
      underrating_ratio: '45',
      price_collapse_ratio: '45',
      consent_limit: '50',
      index_weight: '50',      
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
      id:this.id++})
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
    return (
      <Fragment>
        {/* Header */}
        <div>
          <PageHeader />
        </div>


         {/* DAO 내용} */}
        <div>
          <DaoForm onCreate={this.handleCreate} />
          {/* {JSON.stringify(this.state.information)} */}
          <p>
            <input
              placeholder ="검색할 텔레그램 ID를 입력하세요"
              onChange = {this.handleChange}
              value = {keyword}
              
            />

          </p>
          <DaoInfoList 
          // data = {this.state.information}
          data = {filteredList}
          
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
          />
          
        </div>
      </Fragment>
    );
  }
}

export default App;