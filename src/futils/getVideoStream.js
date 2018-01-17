export const startStream = (audio, video) =>
  navigator.mediaDevices.getUserMedia({ audio, video })
    .catch(err => console.log(err))

export const stopStream = ({ payload }) => {
  payload.getVideoTracks().forEach(track => track.stop())
  payload.getAudioTracks().forEach(track => track.stop())
}