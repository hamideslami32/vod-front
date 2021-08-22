import Navbar from "../../components/ui/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import "./home.scss";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List className="list" title="Actions" />
      <List className="list" title="Drama" />
      <List className="list" title="Horror" />
      <List className="list" title="Adeventure" />
      <List className="list" title="Documentary" />
    </div>
  );
};

export default Home;
