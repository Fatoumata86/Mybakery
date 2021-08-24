import React from 'react'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: 0
          }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value})
      }
    
      handlePriceChange = (e) => {
        this.setState({ price: e.target.value})
      }

  render() {
    console.log(this.props)
    return (
        <>
			<h1>Add</h1>
            <input type="text" onChange={this.handleNameChange}></input>
            <input type="range" onChange={this.handlePriceChange} min="1" max="10"></input>
            <span>{this.state.price}</span>
        </>
    )
  }
}

export default Add