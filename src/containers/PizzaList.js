import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
          this.props.pizzas.map(pizzaObj => {
            return <Pizza 
            key={pizzaObj.id}
            id={pizzaObj.id} 	                
            topping={pizzaObj.topping} 
            size={pizzaObj.size} 
            vegetarian={pizzaObj.vegetarian}
            populateForm={this.props.populateForm}/>})
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
