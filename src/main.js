import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";

import Main from './components/Main';

class BorrowerRoute extends Relay.Route{
    static routeName = 'Borrower';
    static queries ={
        borrower: (Component) => Relay.QL`
            query MainQuery {
                borrower { ${Component.getFragment('borrower')} }
            }
        `
    }
    
}

ReactDOM.render(
    <Relay.RootContainer
        Component={Main}
        route={new BorrowerRoute()}
        />,
        
        document.getElementById('react')
)