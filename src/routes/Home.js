import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/movies">Movies Page</Link>
      <hr />
      <Link to="/cointraker">Coin Traker Page</Link>
      <hr />
      <Link to="/todolist">To Do List Page</Link>
      <hr />
      <Link to="basic">Basic page</Link>
    </div>
  );
}

export default Home;
