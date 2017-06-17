export function spaces(state = {}, action) {
  switch (action.type) {

    case "UPDATE_SPACES":
      return action.spaces

    case "UPDATE_SPACE":
      return {
        ...state,
        [action.spaceId]: action.spaceData
      }

    default:
      return state

  }
}
