import React from 'react';
import fireConfig from '../firebase/fireConfig';

class Home extends React.Component {
    
    logout() {
        fireConfig.auth().signOut();
    }

    render() {
        return(
            <div>
                <h1>
                    You're in LoggedIn Successfully...!
                </h1>
                <button onClick={this.logout}>
                    Logout
                </button>
            </div>
        )
    }
}

export default Home;