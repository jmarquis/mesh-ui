import db from "etc/db"

export function updateUser(user) {
  return {
    type: "UPDATE_USER",
    user
  }
}

export function updateSpaces(spaces) {
  return {
    type: "UPDATE_SPACES",
    spaces
  }
}

export function listenForSpaceChanges() {
  return dispatch => {
    db.ref("spaces").on("value", snapshot => {
      dispatch(updateSpaces(snapshot.val()))
    })
  }
}

export function updateLists(lists) {
  return {
    type: "UPDATE_LISTS",
    lists
  }
}

export function listenForListChanges() {
  return dispatch => {
    db.ref("lists").on("value", snapshot => {
      dispatch(updateLists(snapshot.val()))
    })
  }
}
