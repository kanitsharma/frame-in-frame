import createReducer from '../../futils/createReducer'

const initialState = {
  videoSrc: null,
  showLoader: false
}

const actionHandlers = {
  START_VIDEO: (s, a) => ({ ...s, videoSrc: a.payload, showLoader: false }),
  GET_VIDEO_STREAM: (s, a) => ({ ...s, showLoader: true }),
  STOP_STREAM: (s, a) => ({ ...s, videoSrc: null })
}

export default createReducer(initialState, actionHandlers)
