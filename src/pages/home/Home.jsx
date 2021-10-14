import { useState, useEffect } from "react";
import axios from "../../utils/plugins/axios";
import Navbar from "../../components/ui/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );
        setLists(res.data);
      } catch (error) {
        console.log({ error });
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => (
        <List list={list} key={i} />
      ))}
    </div>
  );
};

export default Home;
