import React from "react"

const Pizza = (props) => {
  const populateForm = () => {
    props.populateForm(props.id, props.topping, props.size, props.vegetarian)
  }
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={populateForm}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
