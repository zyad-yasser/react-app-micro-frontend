import logo from './logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          If you can see this in customer-ui so micro frontend works 🚀
        </p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default Home;
