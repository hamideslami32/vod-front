import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export const Featured = ({ type }) => {
  // const genrs = [
  // 	{
  // 		title:'Adventure',
  // 	},
  // 	{
  // 		title:'Comedy',
  // 		value
  // 	},
  // 	{
  // 		title:'Crime',
  // 	},
  // 	{
  // 		title:'Fantasy',
  // 	},
  // 	{
  // 		title:'Historical',
  // 	},
  // 	{
  // 		title:'Horror',
  // 	},
  // 	{
  // 		title:'Romance',
  // 	},
  // 	{
  // 		title:'Sci-fi'
  // 	},
  // ];

  return (
    <div className="featured">
      <img
        width="100%"
        src="https://cms-assets.theasc.com/Kill-Bill-Featured.jpg?mtime=20200706120040"
      />
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romence</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMeHjr3ppSlBC0lnv1bvlJQEFUjkjzxdMRw&usqp=CAU" />
        <span className="desc">
          Lorem Lorem lorem Lorem Lorem Lorem lorem Lorem Lorem Lorem lorem
          Lorem Lorem Lorem lorem Lorem Lorem Lorem lorem Lorem
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
