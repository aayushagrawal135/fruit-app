import React from 'react'
import Fruit from "./fruit";

class AllFruits extends React.Component  {

    render() {
        let fruits = this.props.fruits.map((fruit) => {
            return (
                <div key={fruit.id}>
                    <Fruit fruit={fruit} handleDelete={this.props.handleDelete}/>
                </div>
            );
        })

        return (
            <div>
                {fruits}
            </div>
        );
    }
}

export default AllFruits