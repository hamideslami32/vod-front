import Navbar from "../../components/ui/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List className="list" title="Actions" />
      <List className="list" title="Drama" />
      <List className="list" title="Horror" />
      <List className="list" title="Adeventure" />
      <List className="list" title="Documentary" />
    </div>
  );
};

export default Home;
