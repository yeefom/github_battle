import React, {PropTypes} from 'react';

const Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps() {
    return {
      text: Loading,
      speed: 300
    };
  },
  getInitialState() {
    this.orginalText = this.props.text;
    return {
      text: this.orginalText
    };
  },
  componentDidMount() {
    const stopper = this.orginalText + '...';
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.orginalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }, this.props.speed);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
});

export default Loading;
