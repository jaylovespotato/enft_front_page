import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
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
                name: this.state.name,
                phone: this.state.phone
            })
        } else{
            this.setState({
                name: info.name,
                phone: info.phone
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

    render() {
        

        //render 안에 변수 선언하는 것은 immutable 데이터 필요 할 때임.
        //render함수 '밖'에 선언되어 있는 개체를 선언 할 때에는 {this.호출할 함수명} 으로 사용합니다.
        // render함수 '안'에 선언된 개체는 1. 매개변수를 받으면 (e) 아니면 2. ()로 표현합니다.
        // ex) const clickHandler = function(e){ 처리구문}
        const { name, phone, id } = this.props.info;

        const { editing } = this.state;

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
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                           />
                           </div>
                           <div><input 
                                name="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                           />
                           </div>
                        </Fragment>
                            ):(
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                            )
                }
                <button onClick={this.handleRemove}>삭제
                </button>
                <button onClick = {this.handleToggleEdit}>
                    {
                    editing? "적용":"수정"
                    }
                </button>

            </div>
        
        );
    }
}

export default PhoneInfo;