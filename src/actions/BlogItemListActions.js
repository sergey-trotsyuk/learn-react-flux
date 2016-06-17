import appDispatcher from '../dispatchers/AppDispatcher'
import blogItemListConstants from '../constants/BlogItemListConstants'

class BlogItemListActions {
  markRead(blogItemId) {
    appDispatcher.dispatch({
      actionType: blogItemListConstants.BLOG_ITEM_LIST_MARK_READ,
      blogItemId: blogItemId
    });
  }

  markUnread(blogItemId) {
    appDispatcher.dispatch({
      actionType: blogItemListConstants.BLOG_ITEM_LIST_MARK_UNREAD,
      blogItemId: blogItemId
    });
  }
}

export default new BlogItemListActions();
