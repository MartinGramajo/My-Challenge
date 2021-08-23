import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavReact from './components/NavReact';
import Header from './components/Header'
import Banner from './components/Banner';
import Article from './components/Article';
import Service from './components/Service';
import Productos from './components/Productos';
import Contacto from './components/Contacto'
import Formulario from './components/Formulario';
import Gallery from './components/Gallery';
import Comments from './components/Comments';

const servicios = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Pick your Scooter",
    descripcion: "We show the most important info for the scooter closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Enjoy the ride",
    descripcion: "Scan the QR code and the bike will unlock. Retract the cable lock, put onn a helmet, and you're off! Always lock bikes away from walkways.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/000/655/090/non_2x/vector-smartphone-games-cartoons.jpg",
    titulo: "Locate with app",
    descripcion: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
];

const trabajos = [
  {
    image: "https://jrroofers.com/static/media/step1.dc109171.jpg",
    titulo: "Schedule Estimate",
    descripcion: "Contact us via call or email. We'll be in touch ASAP.",
  },
  {
    image: "https://jrroofers.com/static/media/step2.79bcd8a5.jpg",
    titulo: "Pick Material Color",
    descripcion: "That is a tough part, choosing color.",
  },
  {
    image: "https://jrroofers.com/static/media/step3.c2db276f.jpg",
    titulo: "Install New Roof",
    descripcion: "Our assistant will be there and install new roof.",
  },
  {
    image: "https://jrroofers.com/static/media/step4.3bc93ed9.jpg",
    titulo: "Enjoy Peace of Mind",
    descripcion: "Your new rooftop is ready and it's awesome.",
  },
];

const imagenes = [
  {
    image: "https://jrroofers.com/static/media/roofing-1-thumb.0595fab5.jpg",
  },
  {
    image: "https://jrroofers.com/static/media/roofing-2-thumb.bb1959d6.jpg",
  },
  {
    image: "https://jrroofers.com/static/media/roofing-3-thumb.d0df1fd3.jpg",
  },
  {
    image: "https://jrroofers.com/static/media/roofing-4-thumb.e9bc3d81.jpg",
  },
  {
    image: "https://jrroofers.com/static/media/roofing-5-thumb.1a0a216f.jpg",
  },
  {
    image: "https://jrroofers.com/static/media/roofing-6-thumb.7a6cbe1e.jpg",
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

      <div className="mt-5 fondo-service ">
        <h1 className="text-center text-white mt-3 mb-5 fs-1">  Our Services </h1>
        <div className=" container d-flex flex-wrap justify-content-between align-items-center mb-4">
          {servicios.map((servicio, i) =>
            <Service key={i} data={servicio} />
          )}
        </div>
      </div>

      <div>
      <h1 className="text-center text-dark mt-3 mb-5 fs-1">  Our Working Process </h1>
        <div className=" container d-flex col-12 text-center">
          {trabajos.map((trabajo, id) =>
            <Productos key={id} data={trabajo} />
          )}
        </div>
      </div>
      <Contacto />
      <Formulario />

      <div className="mt-3 my-4 bg-light">
        <h1 className="m-auto text-center mt-3 my-4">Valuable Client Reviews</h1>
        <div className=" container d-flex">
          {perfiles.map((perfil) =>
            <Comments data={perfil} />
          )}
        </div>
      </div>

      <div className="mt-3 my-4">
        <h1 className="m-auto text-center">Our Gallery</h1>
      <div className="container d-flex flex-wrap justify-content-center m-auto">
        {imagenes.map((imagen, id) =>
        <Gallery key={id} data={imagen} />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
