import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavReact from './components/NavReact';
import Header from './components/Header'
import Banner from './components/Banner';
import Article from './components/Article';

function App() {
  return (
    <div className="">
      <NavReact sticky="top" />
      <Header />
      <Banner />
      <Article />
    </div>
  );
}

export default App;
