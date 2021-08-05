import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {

    static defaultProps={
        data:[]
    }


    render() {
        const { data, onRemove, onUpdate } = this.props;

        // data안에 info를 Phoneinfo에 전달해줄건데
        // info 값은 info이고, key는 id.
        const list = data.map(
            info => (
                <PhoneInfo 
                onRemove = {onRemove}
                onUpdate = {onUpdate}
                info={info} 
                key={info.id} 
                />)
        )
        return (
            
            <div>
                {list}
            </div>
        );
    }

}

export default PhoneInfoList;