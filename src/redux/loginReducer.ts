type loginACType = {
  type: any
}

type InitialStateType = {
  login: any
}

const initialState: InitialStateType = {
  login: null
}

export const loginReducer = (state = initialState, action: loginACType): any => { // InitialStateType
  switch (action.type) {
    case "": {
      return state
    }
      return state
  }
}

export const loginAC = (): loginACType => ({type: null});
