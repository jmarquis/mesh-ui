export function spaces(state = {}, action) {
  switch (action.type) {

    case "UPDATE_SPACES":
      return action.spaces

    default:
      return state

  }
}
