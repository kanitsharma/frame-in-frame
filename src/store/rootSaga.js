import homeSaga from '../connectors/home/sagas'

export default function* rootSaga() {
  yield homeSaga()
}