import React, { Component } from 'react';

class PhoneForm extends Component {

    state ={

        name: '',        
        phone:'',
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
            name:'',
            phone:'',

        })
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름"
                name = "name"
                onChange={this.handleChange}
                //이 value는 e.target.value가 아님. 인풋태그에 들어가는 value가 e.target.value임.
                value={this.state.name}
                />
                
                <input placeholder="전화번호"
                name = "phone"
                onChange={this.handleChange}
                 value={this.state.phone}
                  />
                <button type = "submit">등록</button>
                
            </form>
        );
    }
}

export default PhoneForm;