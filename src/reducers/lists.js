export function lists(state = {}, action) {
  switch (action.type) {

    case "UPDATE_LISTS":
      return action.lists

    case "UPDATE_LIST":
      return {
        ...state,
        [action.listId]: {
          ...state[action.listId],
          ...action.listData
        }
      }

    default:
      return state

  }
}
