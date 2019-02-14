import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }


  remainingChars = () => {
    return (this.props.maxChars - this.state.message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="input" onChange={event => this.setState({message: event.target.value})} value={this.state.message} />
        <p>{this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
