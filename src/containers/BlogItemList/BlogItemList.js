import { connect } from 'react-redux';

import {markRead, markUnread} from '../../actions';
import BlogItemDetailed from '../../components/BlogItemList/BlogItemList';

function mapStateToProps({blogItemList}) {
  return {
    items: blogItemList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMarkRead: (id) => dispatch(markRead(id)),
    onMarkUnread: (id) => dispatch(markUnread(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItemDetailed)
