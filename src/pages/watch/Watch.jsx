import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
  const movieUrl =
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4";
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        <span>Home</span>
      </div>
      <video className="video" autoPlay progress controls src={movieUrl} />
    </div>
  );
};

export default Watch;
