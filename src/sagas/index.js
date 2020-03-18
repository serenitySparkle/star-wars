import { all, put, takeLatest } from 'redux-saga/effects'
import {
  REQUEST, 
  SUCCESS, 
  FAILURE, 
} from '../actions'

import Api from '../api/index'

async function fetchAsync(func, params) {
  const response = await func(params);
  if (response.ok) {
      return await response.json();
  }
  throw new Error("Unexpected error!!!");
}

function* someRequest(action) {
  try {
       const data = yield fetchAsync(Api.someFetch, action.data);
       yield put({type: SUCCESS, data: data});
    } catch (e) {
       yield put({type: FAILURE, message: e.message});
    }
}

function* someRequestWatcher() {
  yield takeLatest(REQUEST, someRequest)
}

export default function* appSaga() {
  yield all([
    someRequestWatcher()
  ]);
}