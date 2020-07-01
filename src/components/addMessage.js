import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions";

class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addMessage(this.state.input);
    this.setState({ input: "" });
  };


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}
            autoComplete="off">
        <input type="text" id="input"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="type message here"/>
        <button>Add Message</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addMessage: () => { dispatch(addMessage) }
//   }
// };

export default connect(mapStateToProps, { addMessage })(AddMessage);
