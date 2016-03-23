
import React from 'react'
import Relay from 'react-relay';
 
import Borrower from '../data/Types/iseries/borrowerInfo'

class Main extends React.Component{
    
    render(){
        let content = this.props.iBorrower.slice(0, this.props.limit).map(borrower => {
            return <li key={borrower.Code}>
            {borrower.TEXT}
            </li>;
        });
        
        return (
           <div>
           <h3>Notes</h3>
           <ul>
           {content}
           </ul>
           </div>  
        );
    }
}

Main = Relay.createContainer(Main, {
    fragments:{
        borrower: () => Relay.QL`
        fragment on Borrower{
           HISTORY{
               CODE,
               TIME,
               TEXT
           }
        }
        `
    }
});

export default Main;