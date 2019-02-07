import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      charsLeft: props.maxChars
    };
  }

  fire = event => {
    this.setState({
      content: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" value={this.state.content} onChange={this.fire}/>
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
