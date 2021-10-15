import ReactHlsPlayer from 'react-hls-player';
const HLSPlayer = (props) => {
  return (
    <ReactHlsPlayer
      src={props.playlist}
      autoPlay={true}
      controls={true}
      width="100%"
      height="auto"
    />
  );
};

export default HLSPlayer;