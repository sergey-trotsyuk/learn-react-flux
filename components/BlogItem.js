var BlogItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    isRead: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      id: null,
      title: null,
      text: null,
      isRead: false
    };
  },

  getInitialState: function () {
    return {
      isRead: this.props.isRead
    }
  },

  onClick: function () {
    this.setState({
      isRead: !this.state.isRead
    });
  },

  render: function () {
    return React.createElement(
      'article',
      {
        className: 'BlogItem'
      },
      React.createElement(
        'h1',
        {
          className: 'BlogItem-Title',
          style: {
            fontWeight: this.state.isRead? 'normal': 'bold'
          }
        },
        this.props.title
      ),
      React.createElement(
        Button,
        {
          onClick: this.onClick
        },
        this.state.isRead? 'Mark as Unread': 'Mark as Read'
      ),
      React.createElement(
        'p',
        null,
        this.props.text
      )
    );
  }
});
