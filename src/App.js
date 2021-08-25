import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavReact from './components/NavReact';
import Header from './components/Header'
import Banner from './components/Banner';
import Article from './components/Article';
import Services from './components/Services';
import Products from './components/Products';


import Contacto from './components/Contacto'
import Formulario from './components/Formulario';
import Gallery from './components/Gallery';
import Comments from './components/Comments';
import Footer from './components/Footer';



const imagenes = [
  {
    img: "https://jrroofers.com/static/media/roofing-1-thumb.0595fab5.jpg",
  },
  {
    img: "https://jrroofers.com/static/media/roofing-2-thumb.bb1959d6.jpg",
  },
  {
    img: "https://jrroofers.com/static/media/roofing-3-thumb.d0df1fd3.jpg",
  },
  {
    img: "https://jrroofers.com/static/media/roofing-4-thumb.e9bc3d81.jpg",
  },
  {
    img: "https://jrroofers.com/static/media/roofing-5-thumb.1a0a216f.jpg",
  },
  {
    img: "https://jrroofers.com/static/media/roofing-6-thumb.7a6cbe1e.jpg",
  },

]

const perfiles = [
  {
    image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    nombre: "Ryan S.",
    comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
  },
  {
    image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    nombre: "Emma S.",
    comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
  },
  {
    image: "https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    nombre: "Emma S.",
    comentario: "“JR roofing did a great job on our roof. Brian was very responsive and professional in my initial request for a bid on replacing our old roof. His detailed proposal and followup emails provided several options and competitive prices.”"
  },
]


function App() {
  return (
    <div className="">
      <NavReact sticky="top" />
      <Header />
      <Banner />
      <Article />
      <Services />
      <Products />
      
      <Contacto />
      <Formulario />

 
        <div className="d-flex justify-content-around">
          {perfiles.map((perfil, i) =>
            <Comments key={ i } data={perfil} />
          )}
        </div>



      <div className="container d-flex flex-wrap justify-content-around">
        {imagenes.map((imagen, id) =>
        <Gallery key={id} data={imagen} />
        )}
      </div>
      
      <Footer />
      </div>
  );
}

export default App;
