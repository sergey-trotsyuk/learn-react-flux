import Reflux from 'reflux';

import BlogItemListActions from '../actions/BlogItemListActions';

const items = [
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
];

export default Reflux.createStore({
  listenables: BlogItemListActions,

  getInitialState() {
    return items;
  },

  onMarkRead(blogItemId) {
    this.markRead(
      parseInt(blogItemId, 10)
    );
  },

  onMarkUnread(blogItemId) {
    this.markUnread(
      parseInt(blogItemId, 10)
    );
  },

  getItemById(itemId) {
    return items.find((item) => {
      return item.id === itemId;
    });
  },

  markRead(itemId) {
    this.getItemById(itemId).isRead = true;
    this.triggerData();
  },

  markUnread(itemId) {
    this.getItemById(itemId).isRead = false;
    this.triggerData();
  },

  triggerData() {
    this.trigger(items);
  }
});
