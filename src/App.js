import React from 'react'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "",
      items: []
    }
  }

  handleButtonClick = (e) => {
    // console.log(e)
    this.setState({ activeTab: e.target.innerText})
  }
  
	render() {
    console.log(this.state.activeTab)
    // console.log(this.props)
    return(
      <>
      {/* App */}
      <Button handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "add"}>add</Button>
      {/* List */}
      <Button handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "list"}>list</Button>
      {/* Pay */}
      <Button handleClick={this.handleButtonClick} isSelected={this.state.activeTab === "pay"}>pay</Button>
      {this.state.activeTab === "add" && <Add />}
      {this.state.activeTab === "list" && <List />}
      {this.state.activeTab === "pay" && <Pay />}
      </>
		)
	}
}

export default App