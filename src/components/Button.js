import React from 'react'

class Button extends React.Component {
  render() {
    // console.log(this.props)
    return (
			<button className={`btn m-2 ${this.props.isSelected ? "btn-primary" : "btn-outline-primary"}`} onClick={this.props.handleClick}>{this.props.children}</button>
    )
  }
}

export default Button