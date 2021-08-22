type restorePasswordACType = {
  type: any
}

type InitialStateType = {
  password: any
}

const initialState: InitialStateType = {
  password: null
}

export const restorePasswordReducer = (state = initialState, action: restorePasswordACType): any => { // InitialStateType
  switch (action.type) {
    case "": {
      return state
    }
      return state
  }
}

export const restorePasswordAC = (): restorePasswordACType => ({type: null});
