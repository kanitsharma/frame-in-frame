import { takeEvery, call, put } from 'redux-saga/effects'
import actionSpreader from '../../futils/actionSpreader'
import { startStream, stopStream } from '../../futils/getVideoStream'

function* getStream (action) {
  const stream = yield call(startStream, true, true)
  yield put(actionSpreader('START_VIDEO', stream))
}

export default function* sagas() {
  yield takeEvery('GET_VIDEO_STREAM', getStream)
  yield takeEvery('STOP_STREAM', stopStream)
}