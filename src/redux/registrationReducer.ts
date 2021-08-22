type registrationACType = {
  type: any
}

type InitialStateType = {
  newName: any
}

const initialState: InitialStateType = {
  newName: null
}

export const registrationReducer = (state = initialState, action: registrationACType): any => { // InitialStateType
  switch (action.type) {
    case "": {
      return state
    }
      return state
  }
}

export const registrationAC = (): registrationACType => ({type: null});
