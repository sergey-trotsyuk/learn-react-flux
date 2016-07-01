import {MARK_AS_READ, MARK_AS_UNREAD} from '../constants'

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

function blogItem(state, action) {
  switch (action.type) {
    case MARK_AS_READ:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        isRead: true
      };
      break;
    case MARK_AS_UNREAD:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        isRead: false
      };
      break;

    default:
      return state;
  }
}

export default function (state = items, action) {
  switch (action.type) {
    case MARK_AS_READ:
    case MARK_AS_UNREAD:
      return state.map(item => blogItem(item, action));
      break;

    default:
      return state;
  }
}
