import Navbar from "../../components/ui/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List title="Actions" />
      <List title="Drama" />
      <List title="Horror" />
      <List title="Adeventure" />
      <List title="Documentary" />
    </div>
  );
};

export default Home;
