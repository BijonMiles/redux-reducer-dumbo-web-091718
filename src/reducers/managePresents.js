// let store = { numberOfPresents: 0 }
export function managePresents(state, action){

  // action = {
  //   type: "INCREASE"
  // }

  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: state.numberOfPresents + 1 }
    default:
      return state
  }
}
