import React from "react";
import AddMessage from "./components/addMessage";
import MessageList from "./components/messageList";

export default function App() {
  return (
    <div className="todo-app">
      <h1>Message List</h1>
      <AddMessage />
      <MessageList />
      </div>
  );
}
