import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {text: "", remaining: this.props.maxChars};
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
      remaining: this.state.remaining - event.target.value.length
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <div> {this.state.remaining} </div>
      </div>
    );
  }
}

export default TwitterMessage;
