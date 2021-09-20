import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjAwNzE5MGY5MGU4ZTVhOGVlNDljNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjE3MDc2MiwiZXhwIjoxNjMyNjAyNzYyfQ.FkIqj3wTfRBCIY2x9EDSaJoOIlH4gYW4NzBW6MLzzyo",
          },
        });
        console.log({ res });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);
  const heroMovieImage = "/static/kill-bill-vol-2.jpg";
  return (
    <div className="featured">
      <img width="100%" src={heroMovieImage} alt="hero-rosemary-baby" />
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
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
        <h2>Kill Bill vol.1</h2>
        <div className="main-info">
          <span>
            Director: <span>Quentin Tarantino</span>
          </span>
          <span>2003</span>
        </div>
        <span className="desc">
          A former assassin, known simply as The Bride (Uma Thurman), wakes from
          a coma four years after her jealous ex-lover Bill (David Carradine)
          attempts to murder her on her wedding day. Fueled by an insatiable
          desire for revenge, she vows to get even with every person who
          contributed to the loss of her unborn child, her entire wedding party,
          and four years of her life. After devising a hit list, The Bride sets
          off on her quest, enduring unspeakable injury and unscrupulous
          enemies.
        </span>
        <div className="buttons">
          <Link className="link" to="/watch">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
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
