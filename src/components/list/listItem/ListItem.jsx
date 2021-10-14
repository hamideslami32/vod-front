import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "../../../utils/plugins/axios";
import { useHistory, Link } from "react-router-dom";
import debounce from "lodash/debounce";
import "./listItem.scss";
const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const debounced = debounce(() => debounce);
  // const trailer = "/static/kill-bill-vol-1.mp4";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/" + item);
        setMovie(res.data);
      } catch (error) {
        console.log({ error });
      }
    };
    getMovie();
  }, [item]);
  let history = useHistory();
  const handleClick = () => {
    history.push("/watch");
  };
  return (
    <Link to={{ pathname: "/watch", movie }}>
      <div
        className={isHovered ? "listItem hovered" : "listItem"}
        onMouseEnter={() => debounced(setIsHovered(true), 500)}
        onMouseLeave={() => debounced(setIsHovered(false), 500)}
      >
        <img src={`/static/${movie.img}`} alt="" />
        {isHovered && (
          <>
            <video src={`/static/${movie.trailer}`} autoPlay loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" onClick={() => handleClick()} />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
