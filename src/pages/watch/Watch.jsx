import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const history = useHistory();
  const movieUrl = "/static/rosemary's baby.mp4";
  return (
    <div className="watch">
      <div className="back" onClick={() => history.push("/")}>
        <ArrowBackOutlined />
        <span>Home</span>
      </div>
      <video className="video" autoPlay progress controls src={movieUrl} />
    </div>
  );
};

export default Watch;
