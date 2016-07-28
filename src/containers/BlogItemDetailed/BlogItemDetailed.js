import { connect } from 'react-redux'

import { markRead } from '../../actions';
import BlogItemDetailed from '../../components/BlogItemDetailed/BlogItemDetailed';

export function mapStateToProps(state, ownProps) {
  const item = state.blogItemList.find((item) => item.id === parseInt(ownProps.params.id));
  return {
    ...item
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onMarkRead: (id) => dispatch(markRead(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItemDetailed)
