type profileACType = {
  type: any
}

type InitialStateType = {
  name: any
}

const initialState: InitialStateType = {
  name: null
}

export const profileReducer = (state = initialState, action: profileACType): any => { // InitialStateType
  switch (action.type) {
    case "": {
      return state
    }
      return state
  }
}

export const profileAC = (): profileACType => ({type: null});
