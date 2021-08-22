type newPasswordACType = {
  type: any
}

type InitialStateType = {
  newPassword: any
}

const initialState: InitialStateType = {
  newPassword: null
}

export const newPasswordReducer = (state = initialState, action: newPasswordACType): any => { // InitialStateType
  switch (action.type) {
    case "": {
      return state
    }
      return state
  }
}

export const newPasswordAC = (): newPasswordACType => ({type: null});
