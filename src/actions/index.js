export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const sendRequest = data => ({
    type: REQUEST,
    token: data
})