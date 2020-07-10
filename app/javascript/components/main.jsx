import React from 'react'
import AllFruits from './all_fruits'

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <AllFruits />
            </div>
        );
    }
}

export default Main;