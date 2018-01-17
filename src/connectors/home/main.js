import React from 'react'
import { connect } from 'react-redux'
import actionSpreader from '../../futils/actionSpreader'

const Home = ({ startVideo, stopVideo, showLoader, videoSrc }) => (
  <div className='home'>
    <div className='videoContainer'>
      {
        videoSrc &&
        <video src={window.URL.createObjectURL(videoSrc)} className='video' autoPlay></video>
      }
      {
        showLoader &&
        <div className='loader' />
      }
    </div>
    {
      !videoSrc
      ? <div className='startVideo' onClick={startVideo}>Start</div>
      : <div className='stopVideo' onClick={() =>stopVideo(videoSrc)}>Stop</div>
    }
  </div>
)

const mapStateToProps = state => ({
  videoSrc: state.home.videoSrc,
  showLoader: state.home.showLoader
})

const mapDispatchToProps = dispatch => ({
  startVideo: _ => dispatch(actionSpreader('GET_VIDEO_STREAM')),
  stopVideo: stream => dispatch(actionSpreader('STOP_STREAM', stream))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
