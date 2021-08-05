import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {

  id=3;
  state= {
  information:[
    {
      id:0,
      name: '홍길동',
      phone: '010-0000-0001'
    },

    {
      id:1,
      name: '김동길',
      phone: '010-1111-1111'
    },

    {
      id:2,
      name: '정동진',
      phone: '010-2222-2222'
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
  // 비구조할당

  // const {information} = this.state;
  this.setState({
    information: this.state.information.concat({
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
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/* {JSON.stringify(this.state.information)} */}
        <p>
          <input
            placeholder ="검색할 이름을 입력하세요"
            onChange = {this.handleChange}
            value = {keyword}
            
          />

        </p>
        <PhoneInfoList 
        // data = {this.state.information}
        data = {filteredList}
        
        onRemove = {this.handleRemove}
        onUpdate = {this.handleUpdate}
         />
        
      </div>
    );
  }
}

export default App;