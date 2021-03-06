import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavReact from './components/NavReact';
import Header from './components/Header'
import Banner from './components/Banner';
import Article from './components/Article';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact'
import Formulario from './components/Formulario';
import CommentsTitle from './components/CommentsTitle';
import Comments from './components/Comments';
import GalleryTitle from './components/GalleryTitle';
import GalleryImg from './components/GalleryImg';
import Footer from './components/Footer';


function App() {
  return (
    <div className="">
      <NavReact sticky="top" />
      <Header />
      <Banner />
      <Article />
      <Services />
      <Products />
      <Contact />
      <Formulario />
      <CommentsTitle />
      <Comments />
      <GalleryTitle />
      <GalleryImg />
      <Footer />
      </div>
  );
}

export default App;
