var BlogItemList = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  getDefaultProps: function() {
    return {
      items: []
    };
  },

  render: function () {
    var items = this.props.items.map(function (item) {
      return React.createElement(
        BlogItem,
        Object.assign({
          key: item.id
        }, item)
      );
    }, this);

    return React.createElement(
      'div',
      {
        className: 'BlogItemList'
      },
      items
    );
  }
});
