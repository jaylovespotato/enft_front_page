import React, { Component, Fragment } from 'react';
import DaoInfo from './DaoInfo';


class FinalDaoList extends Component {

    static defaultProps={
        data:[],
        
    }

    render() {
        const { finaldata } = this.props;
    

        const finallist = finaldata.map(
            info => (
                <DaoInfo 
                info={info} 
                key={info.id} 
                />)
        )          
                
              
        return (
            
            <Fragment>
                <div>
                  {finallist}
                </div>
            </Fragment>
        );
    }

}

export default FinalDaoList;