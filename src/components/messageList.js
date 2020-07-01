import React from "react";
import { connect } from "react-redux";
import { delMessage } from "../actions";

class MessageList extends React.Component {

  handleClick = (id) => {
    // console.log('inside handleClick')
    // console.log(id)
    // console.log(this.props)
    this.props.delMessage(id)
  };

  render() {
    console.log('render');
    console.log(this.props);
    const messageList = this.props.messages.map(message =>
        <div className="messages" key={message.id}>
        {message.content}
        <button className="del-btn" onClick={() => this.handleClick(message.id)}>x</button>
        </div>
      )
    return(
      <ul className="message-list">
      { messageList }
      </ul>)
    };
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     delMessage: (id) => { dispatch(delMessage(id)) }
//   };
// };

export default connect(mapStateToProps, { delMessage })(MessageList);
