import axios from 'axios'
import helper from '../helper'

// Force base URL to backend origin
export const baseUrl = 'http://localhost:8881'

// Default headers
const headersDefault = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}

// Resolve baseURL: if calling relative `/api/*`, use same-origin (to work with Next rewrites/proxy)
function resolveBaseURL() {
  return baseUrl
}

// // Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.data.resultCode === 40100) {
      const lang = helper.LANG.getLang() || 'en'
      window.location.href = `/${lang}/login`
    }
    console.log(error)
    return Promise.reject(error)
  }
)
axios.defaults.withCredentials = false
export function get({ url, baseURL, params, timeOut = 20000, headers = {} }) {
  return axios({
    url,
    method: 'get',
    baseURL: baseURL ?? resolveBaseURL(),
    headers: {
      ...headersDefault,
      ...(helper.Auth.getToken() ? { authorization: helper.Auth.getToken() } : {}),
      lang: helper.Auth.getLang(),
      ...headers
    },
    params,
    timeout: timeOut
  })
    .then(res => {
      // console.log('GET api main success >>', res)
      return res
    })
    .catch(e => {
      // const resData = e?.response?.data ?? {};
      console.log('GET api main err >>', e.response)
      return e.response
    })
}

export function post({ url, baseURL, params, data, timeOut = 20000, token = null, headers = {} }) {
  // ตรวจจับ FormData เพื่อไม่เซ็ต Content-Type เป็น application/json
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData
  const baseHeaders = {
    ...headersDefault,
    ...(helper.Auth.getToken() ? { authorization: helper.Auth.getToken() } : {}),
    lang: helper.Auth.getLang(),
    ...(token ? { 'x-csrf-token': token } : {}),
    ...headers
  }
  if (isFormData) {
    delete baseHeaders['Content-Type']
  }
  return axios({
    url,
    method: 'post',
    baseURL: baseURL ?? resolveBaseURL(),
    headers: baseHeaders,
    params,
    data,
    timeout: timeOut
  })
    .then(res => {
      // console.log('POST api main success >>', res)
      return res
    })
    .catch(e => {
      // const resData = e?.response?.data ?? {};
      console.log('POST api main err >>', e.response?.data)
      return e.response
    })
}

export function put({ url, baseURL, params, data, timeOut = 20000, token = null, headers = {} }) {
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData
  const baseHeaders = {
    ...headersDefault,
    ...(helper.Auth.getToken() ? { authorization: helper.Auth.getToken() } : {}),
    lang: helper.Auth.getLang(),
    ...(token ? { 'x-csrf-token': token } : {}),
    ...headers
  }
  if (isFormData) {
    delete baseHeaders['Content-Type']
  }
  return axios({
    url,
    method: 'put',
    baseURL: baseURL ?? resolveBaseURL(),
    headers: baseHeaders,
    params,
    data,
    timeout: timeOut
  })
    .then(res => {
      // console.log('POST api main success >>', res)
      return res
    })
    .catch(e => {
      // const resData = e?.response?.data ?? {};
      console.log('PUT api main err >>', e.response?.data)
      return e.response
    })
}

export function patch({ url, baseURL, params, data, timeOut = 20000, token = null, headers = {} }) {
  const isFormData = typeof FormData !== 'undefined' && data instanceof FormData
  const baseHeaders = {
    ...headersDefault,
    ...(helper.Auth.getToken() ? { authorization: helper.Auth.getToken() } : {}),
    lang: helper.Auth.getLang(),
    ...(token ? { 'x-csrf-token': token } : {}),
    ...headers
  }
  if (isFormData) {
    delete baseHeaders['Content-Type']
  }
  return axios({
    url,
    method: 'patch',
    baseURL: baseURL ?? resolveBaseURL(),
    headers: baseHeaders,
    params,
    data,
    timeout: timeOut
  })
    .then(res => {
      console.log('PATCH api main success >>', res)
      return res
    })
    .catch(e => {
      // const resData = e?.response?.data ?? {};
      console.log('PATCH api main err >>', e.response?.data)
      return e.response
    })
}


export function deleteMethod({ url, baseURL, params, timeOut = 20000, headers = {} }) {
  return axios({
    url,
    method: 'delete',
    baseURL: baseURL ?? resolveBaseURL(),
    headers: {
      ...headersDefault,
      ...(helper.Auth.getToken() ? { authorization: helper.Auth.getToken() } : {}),
      lang: helper.Auth.getLang(),
      ...headers
    },
    params,
    timeout: timeOut
  })
    .then(res => {
      console.log('DELETE api main success >>', res)
      return res
    })
    .catch(e => {
      // const resData = e?.response?.data ?? {};
      console.log('DELETE api main err >>', e.response?.data)
      return e.response
    })
}


