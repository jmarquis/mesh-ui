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

export function updateSpace(spaceId, spaceData) {
  return {
    type: "UPDATE_SPACE",
    spaceId,
    spaceData
  }
}

export function fetchSpaces() {
  return (dispatch, getState) => {
    const spaceIds = Object.keys(getState().spaces)
    spaceIds.forEach(spaceId => {
      db.ref("spaces").child(spaceId).once("value", snapshot => {
        dispatch(updateSpace(spaceId, snapshot.val()))
      })
    })
  }
}

export function fetchUser(user) {
  return dispatch => {
    db.ref("users").child(user.uid).once("value", snapshot => {
      dispatch(updateUser(snapshot.val()))
      dispatch(updateSpaces(snapshot.child("spaces").val()))
      dispatch(fetchSpaces())
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
