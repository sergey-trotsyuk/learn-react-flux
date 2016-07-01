import {MARK_AS_READ, MARK_AS_UNREAD} from '../constants/blogItem'

export function markRead(id) {
  return {
    type: MARK_AS_READ,
    id
  }
}

export function markUnread(id) {
  return {
    type: MARK_AS_UNREAD,
    id
  }
}
