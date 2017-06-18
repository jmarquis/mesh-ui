import db from "etc/db"
import { log } from "etc/logger"

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

export function fetchSpaceData() {
  log("fetching space data")
  return (dispatch, getState) => {
    const spaceIds = Object.keys(getState().spaces)
    spaceIds.forEach(spaceId => {
      log("fetching space data for spaceId:", spaceId)
      db.ref("spaces").child(spaceId).once("value", snapshot => {
        const spaceData = snapshot.val()
        log(`new space data for ${spaceId}:`, spaceData)
        const lists = snapshot.child("lists").val()
        dispatch(updateSpace(spaceId, {
          ...spaceData,
          lists
        }))
        dispatch(fetchListData(Object.keys(lists)))
      })
    })
  }
}

export function fetchListData(listIds) {
  log("fetching list data for:", listIds)
  return dispatch => {
    listIds.forEach(listId => {
      log("fetching list data for", listId)
      db.ref("lists").child(listId).once("value", snapshot => {
        const listData = snapshot.val()
        log(`new list data for ${listId}:`, listData)
        const notes = snapshot.child("notes").val()
        dispatch(updateList(listId, {
          ...listData,
          notes
        }))
        dispatch(fetchNoteData(Object.keys(notes)))
      })
    })
  }
}

export function updateList(listId, listData) {
  return {
    type: "UPDATE_LIST",
    listId,
    listData
  }
}

export function fetchNoteData(noteIds) {
  log("fetching note data for:", noteIds)
  return dispatch => {
    noteIds.forEach(noteId => {
      log("fetching note data for", noteId)
      db.ref("notes").child(noteId).once("value", snapshot => {
        const noteData = snapshot.val()
        log(`new note data for ${noteId}`, noteData)
        dispatch(updateNote(noteId, noteData))
      })
    })
  }
}

export function updateNote(noteId, noteData) {
  return {
    type: "UPDATE_NOTE",
    noteId,
    noteData
  }
}

export function fetchUser(user) {
  return dispatch => {
    db.ref("users").child(user.uid).once("value", snapshot => {
      dispatch(updateUser(snapshot.val()))
      dispatch(updateSpaces(snapshot.child("spaces").val()))
      dispatch(fetchSpaceData())
    })
  }
}
