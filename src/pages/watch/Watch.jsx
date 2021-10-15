import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import HLSPlayer from '../../components/hls-player/HLSPlayer'
import "./watch.scss";

const Watch = () => {
  // const location = useLocation();
  // const movie = location.movie;
  const history = useHistory();
  const playlist = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
  return (
    <div className="watch">
      <div className="back" onClick={() => history.push("/")}>
        <ArrowBackOutlined />
        <span>Home</span>
      </div>
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
      <HLSPlayer playlist={playlist} />
    </div>
  );
};

export default Watch;
