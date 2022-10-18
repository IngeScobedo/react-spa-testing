import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    const lastPath = window.localStorage.getItem('lastPath') || '/'

    login('test@test.com', 'Alan123')

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
      <form onSubmit={handleLogin} className='w-[80%] max-w-[350px] px-5 py-2 flex flex-col justify-center items-center gap-3'>
        <div className='form-control-wrapper'>
          <label className='form-label' htmlFor='mail'>Correo electrónico</label>
          <input type='email' className='form-input' />
        </div>
        <div className='form-control-wrapper'>
          <label className='form-label' htmlFor='password'>Contraseña</label>
          <input type='password' id='password' className='form-input' />
        </div>
        <div className='w-full flex justify-center'>
          <button className='w-[64] h-[38px] px-2 text-white font-bold rounded-xl hover:bg-slate-200'>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}
