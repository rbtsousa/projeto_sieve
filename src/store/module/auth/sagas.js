import {call,takeLatest,all,put} from 'redux-saga/effects'
import {toast} from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'

import {signInSuccess,signFailure} from './action'

export function* signIn({payload }){ 
      
try {
    const {email,password} = payload

    const response = yield call(api.post,'sessions',{
        email,
        password,
         
    })

    const {token,user} = response.data


    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token,user))

    user.institution? history.push('/areadaempresa') : history.push('/areadoaluno')
}catch(err){
    toast.error('falha na autentificação,verifique seus dados')
    yield put(signFailure())
}
}

// eslint-disable-next-line require-yield
export function* signUp({payload}){
    try{
      const {name,email,password,age,gender,institution} = payload
      yield call(api.post, 'users',{
          name,
          email,
          password,
          age,
          gender,
          institution

      })
      history.push('/')
    }catch(err){
        toast.error('Falha no cadastro,verifique seus dados')
    }
}   
export function setToken({payload}){
    if(!payload)return;

    const {token} = payload.auth

    if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`
    }
}

export default all([
takeLatest("persist/REHYDRATE",setToken),
takeLatest("@auth/SIGN_IN_REQUEST",signIn),
takeLatest("@auth/SIGN_UP_REQUEST",signUp)
])
