import React from 'react'
import AllFruits from './all_fruits'

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Fruits are great</h1>
                <AllFruits />
            </div>
        );
    }
}

export default Main;