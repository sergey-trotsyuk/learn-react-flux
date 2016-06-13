var App = function (props) {
  return React.createElement(
    'section',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Blog title'
    ),
    React.createElement(
      BlogItemList,
      {
        items: props.items
      }
    )
  );
};
