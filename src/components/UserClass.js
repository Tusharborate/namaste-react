import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " Child component constructor method called");
    this.state = {
      count: 0,
      countTwo: 3,
    };
  }

  componentDidMount() {
    console.log(
      this.props.name + " Child component componentDidMount method called"
    );
  }

  render() {
    console.log(this.props.name + " Child component render method called");
    return (
      <>
        <h2>Name: {this.props.name}</h2>
        <h3>Designation: {this.props.designation}</h3>
        <h4>Location: {this.props.location}</h4>
        <p>Count One: {this.state.count}</p>
        <p>Count Two: {this.state.countTwo}</p>
        <button
          onClick={() => {
            this.setState({
              countTwo: this.state.countTwo + 1,
            });
          }}
        >
          Increase Count Two
        </button>
      </>
    );
  }
}

export default UserClass;
