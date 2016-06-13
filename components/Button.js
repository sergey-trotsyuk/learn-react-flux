var Button = function (props) {
  return React.createElement(
    'button',
    {
      className: 'Button',
      onClick: props.onClick
    },
    props.children
  );
};
