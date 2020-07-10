import React from 'react'
import AllFruits from "./all_fruits";
import NewFruit from "./new_fruit";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fruits: [] };
    }

    handleFormSubmit(name, description) {
        console.log(name, description)
    }

    componentDidMount() {
        fetch('api/v1/fruits.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({fruits: data}) });
    }

    render() {
        return (
            <div>
                <NewFruit handleFormSubmit={this.handleFormSubmit}/>
                <AllFruits fruits={this.state.fruits} />
            </div>
        );
    }
}

export default Body