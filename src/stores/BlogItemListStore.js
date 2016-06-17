import EventEmitter from 'events';

import appDispatcher from '../dispatchers/AppDispatcher';
import blogItemListConstants from '../constants/BlogItemListConstants'

const store = {
  items: [
    {
      id: 1,
      title: 'Item title 1',
      text: 'Item text 1',
      isRead: false
    },
    {
      id: 2,
      title: 'Item title 2',
      text: 'Item text 2',
      isRead: false
    }
  ]
};

const EVENT_CHANGE = 'change';


class BlogItemStore extends EventEmitter {
  dispatchToken = null;

  getItemById(itemId) {
    return store.items.find((item) => {
      return item.id === itemId;
    });
  }

  getItems() {
    return store.items;
  }

  markRead(itemId) {
    this.getItemById(itemId).isRead = true;
    this.emitChange();
  }

  markUnread(itemId) {
    this.getItemById(itemId).isRead = false;
    this.emitChange();
  }

  emitChange() {
    this.emit(EVENT_CHANGE);
  }

  addChangeListener(listener) {
    this.on(EVENT_CHANGE, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(EVENT_CHANGE, listener);
  }
}

const blogItemStore = new BlogItemStore();

blogItemStore.dispatchToken = appDispatcher.register(function(action) {
  switch(action.actionType) {
    case blogItemListConstants.BLOG_ITEM_LIST_MARK_READ:
      blogItemStore.markRead(
        parseInt(action.blogItemId, 10)
      );

      break;

    case blogItemListConstants.BLOG_ITEM_LIST_MARK_UNREAD:
      blogItemStore.markUnread(
        parseInt(action.blogItemId, 10)
      );
      break;
  }
});

export default blogItemStore;
