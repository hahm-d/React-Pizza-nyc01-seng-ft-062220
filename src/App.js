import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const api = "http://localhost:3000/pizzas"

class App extends Component {

  state = {
    pizzas: [],
    id: "",
    size: "",
    topping: "",
    vegetarian: false
  }

  componentDidMount() {
    this.getPizzas()
  }

  getPizzas = () => {
    fetch(api)
    .then(resp => resp.json())
    .then(data => this.setState({ pizzas: data }))
  }

  submitHandler = () => {
    console.log(this.state.id)
    const pizzachange = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
    const settings = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(pizzachange)
    }
    fetch(`${api}/${parseInt(this.state.id)}`, settings)
    .then(resp => resp.json())
    .then(data => this.getPizzas())
  }

  updateHandler = e => {
    console.log(e.target.value)
    if(e.target.name === 'vegetarian'){
      this.setState({vegetarian: (e.target.value === "Vegetarian" ? true : false)})
    }else{
      this.setState({[e.target.name]: e.target.value})
    } 
  }

  populateForm = (id, topping, size, vegetarian) => {
    this.setState({ id: id, topping: topping, size: size, vegetarian: vegetarian })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        size={this.state.size} 
        topping={this.state.topping} 
        vegetarian={this.state.vegetarian} 
        updateHandler={this.updateHandler}
        submitHandler={this.submitHandler}/>
        <PizzaList
        pizzas={this.state.pizzas}
        populateForm={this.populateForm}/>
      </Fragment>
    );
  }
}

export default App;
