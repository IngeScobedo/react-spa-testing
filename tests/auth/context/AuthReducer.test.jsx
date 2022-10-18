import { authReducer, types } from '../../../src/auth/'

describe('Pruebas en el AuthReducer', () => {
  const INITIAL_STATE = authReducer({
    logged: false,
    user: undefined
  }, {})

  const USER = {
    id: 1,
    email: 'coffe@coffe.com',
    pwd: '$$3sto_N0_!3sm1$c0ntr@cñ@$$',
    name: 'Alan Escobedo'
  }

  const INITIAL_STATE_LOGGED = authReducer({
    logged: true,
    user: USER
  }, {})

  const ACTION_LOGIN = {
    type: types.login,
    payload: {
      logged: true,
      payload: USER
    }
  }

  const ACTION_LOGOUT = {
    type: types.logout
  }

  test('Deber de retornar el estado por defecto', () => {
    expect(INITIAL_STATE).toEqual({
      logged: false,
      user: undefined
    })
  })

  test('Debe de (login) llamar el login autenticar y establecer el user', () => {
    const STATE = authReducer(INITIAL_STATE, ACTION_LOGIN)
    expect(STATE).toEqual({
      logged: true,
      user: ACTION_LOGIN.payload
    })
  })

  test('Debe de (logout) borrar el name del usuario y logged en false', () => {
    const STATE = authReducer(INITIAL_STATE_LOGGED, ACTION_LOGOUT)
    expect(STATE).toEqual({
      logged: false,
      user: undefined
    })
  })
})
