import { API } from '../actions/types/api'

const apiMiddleware = ({ getState }) => next => action => {
  if(action.type !== API) {
    return
  }
  const {
    url,
    method = 'GET',
    data,
    name,
    contentType = 'application/json',
    stringifyData = true,
    callback,
  } = action
  const options = {
    method,
    ...(method === 'POST' || method === 'DELETE' ? { body: stringifyData ? JSON.stringify(data) : data } : null),
    headers: {
      'Content-Type': contentType
    },
  }
  const apiDomain = process.env.REACT_APP_API_DOMAIN
  fetch(`${apiDomain}${url}`, options)
    .then(response => response.json().then(
      data => ({
        status: response.status,
        dataReceived: data,
      })
    ))
    .then(({ status, dataReceived }) => {
      const isValid = status >= 200 && status < 300
      if(isValid) {
        return next({
          type: `${name}_SUCCESS`,
          payload: callback ? callback(dataReceived) : dataReceived
        })
      }
    })
}

export default apiMiddleware