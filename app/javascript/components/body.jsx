import React from 'react'
import AllFruits from "./all_fruits";
import NewFruit from "./new_fruit";

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fruits: [] };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewFruit = this.addNewFruit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.deleteFruit = this.deleteFruit.bind(this)
    }

    handleDelete(id) {
        fetch(`/api/v1/fruits/${id}`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }).then((response) => { this.deleteFruit(id) })
    }

    deleteFruit(id) {
        this.setState((state) => {
            let newFruits = state.fruits.filter((fruit) => fruit.id != id)
            return {fruits: newFruits}
        })
    }

    handleFormSubmit(name, description) {
        let body = JSON.stringify({fruit: { name: name,
                description: description }
        })

        fetch('/api/v1/fruits', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body
        }).then((response) => {return response.json() })
            .then((fruit)=> {this.addNewFruit(fruit) })
    }

    addNewFruit(fruit) {
        this.setState((state) => {
          return {fruits: state.fruits.concat(fruit) }
        });
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
                <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Body