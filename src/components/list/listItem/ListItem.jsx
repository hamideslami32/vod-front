import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";
import "./listItem.scss";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const debounced = debounce(() => debounce);
  const trailer = "/static/rosemary's baby.mp4";
  let history = useHistory();
  const handleClick = () => {
    history.push("/watch");
  };
  return (
    <div
      className={isHovered ? "listItem hovered" : "listItem"}
      onMouseEnter={() => debounced(setIsHovered(true), 500)}
      onMouseLeave={() => debounced(setIsHovered(false), 500)}
    >
      <img
        src="https://anotherimg-dazedgroup.netdna-ssl.com/786/azure/another-prod/340/5/345807.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" onClick={() => handleClick()} />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip
            </div>
            <div className="genre">Action, Comedy</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
