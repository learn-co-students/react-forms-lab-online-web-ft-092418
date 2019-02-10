import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.maxChars,
      input: null
    };
  }

  changeHandler = (event) => {
    this.setState({
      characters: this.state.characters - event.target.value.length,
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler} value={this.state.input}/>
        <p>{this.state.characters} characters left!</p>
      </div>
    );
  }
}

export default TwitterMessage;
