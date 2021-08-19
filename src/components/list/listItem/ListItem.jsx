import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import debounce from "lodash/debounce";
import "./listItem.scss";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const debounced = debounce(() => debounce);
  const trailer =
    "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4";
  return (
    <div
      className="listItem"
      onMouseEnter={() => debounced(setIsHovered(true), 500)}
      onMouseLeave={() => debounced(setIsHovered(false), 500)}
    >
      <img src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop controls />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
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
