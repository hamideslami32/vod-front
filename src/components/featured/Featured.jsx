import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export const Featured = ({ type }) => {
  const heroMovieImage = "https://wallpapercave.com/wp/wp6095970.jpg";
  return (
    <div className="featured">
      <img width="100%" src={heroMovieImage} alt="hero-rosemary-baby" />
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
        <h2>Rosemary's Baby</h2>
        <div className="main-info">
          <span>
            Director: <span>Roman Polanski</span>
          </span>
          <span>1968</span>
        </div>
        <span className="desc">
          After moving into an apartment with Guy, her husband, Rosemary hears
          and dreams strange things. When she gets pregnant, she suspects her
          neighbours have sinister plans for her baby.
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
