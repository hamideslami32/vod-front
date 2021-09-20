import { ArrowBackOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import "./watch.scss";

const Watch = () => {
  const location = useLocation();
  const history = useHistory();
  const movie = location.movie;
  return (
    <div className="watch">
      <div className="back" onClick={() => history.push("/")}>
        <ArrowBackOutlined />
        <span>Home</span>
      </div>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default Watch;
