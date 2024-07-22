import { takeEvery, put, delay } from 'redux-saga/effects';
import { INCREMENT_ASYNC, increment } from './actions';

function* incrementAsyncSaga() {
  yield delay(1000);
  yield put(increment());
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}
